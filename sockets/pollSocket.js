const Vote = require('../models/Vote');
const basicQuestions = require('../data/basicQuestions');
const employeeQuestions = require('../data/employeeQuestions');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('vote', async (data) => {
      try {
        const { questionKey, optionKey, isEmployee } = data;
        const questions = isEmployee ? employeeQuestions : basicQuestions;
        const question = questions.find(q => q.key === questionKey);
        if (!question) return socket.emit('error', 'Invalid question');
        const option = question.options.find(opt => opt.key === optionKey);
        if (!option) return socket.emit('error', 'Invalid option');

        await Vote.create({
          questionKey,
          optionKey,
          isEmployee,
          questionText: question.text,
          optionText: option.text
        });
        // socket.emit('voteSuccess', { success: true });
      } catch (err) {
        // socket.emit('error', 'Failed to save vote');
      }
    });
  });
}; 