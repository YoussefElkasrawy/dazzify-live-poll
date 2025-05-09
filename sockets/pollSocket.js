const Vote = require('../models/Vote');
const basicQuestions = require('../data/basicQuestions');
const employeeQuestions = require('../data/employeeQuestions');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('vote', async (data) => {
      try {
        const { questionKey, optionKey, isEmployee } = data;

        // Save the vote
        await Vote.create({
          userId: socket.id.toString(),
          questionKey,
          optionKey,
          isEmployee
        });

        // Calculate new percentages after vote
        const updatedPercentages = await calculatePercentages(questionKey, isEmployee);

        // Broadcast the updated percentages to all clients
        io.emit('voteUpdate', {
          questionKey,
          percentages: updatedPercentages
        });

      } catch (err) {
        console.error('Vote processing error:', err);
      }
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });

  // Helper function to calculate percentages for a question
  async function calculatePercentages(questionKey, isVoterEmployee) {
    try {
      // Determine which question set to use based on vote source
      const questionSet = isVoterEmployee ? employeeQuestions : basicQuestions;

      // Find the question in the appropriate question set
      const question = questionSet.find(q => q.key === questionKey);
      if (!question) {
        console.warn(`Question ${questionKey} not found in questions data`);
        return [];
      }

      // Get all votes for this question (matching the same employee/non-employee context)
      const votes = await Vote.find({
        questionKey,
        isEmployee: isVoterEmployee
      });

      if (!votes.length) return Array(question.options.length).fill(0);

      // Count votes per option
      const voteCounts = {};
      votes.forEach(vote => {
        if (!voteCounts[vote.optionKey]) {
          voteCounts[vote.optionKey] = 0;
        }
        voteCounts[vote.optionKey]++;
      });

      // Calculate percentages for each option
      const percentages = question.options.map(option => {
        const count = voteCounts[option.key] || 0;
        return Math.round((count / votes.length) * 100);
      });

      return percentages;
    } catch (err) {
      console.error('Error calculating percentages:', err);
      return [];
    }
  }
}; 