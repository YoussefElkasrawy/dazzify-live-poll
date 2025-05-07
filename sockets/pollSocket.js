const Vote = require('../models/Vote');
const basicQuestions = require('../data/basicQuestions');
const employeeQuestions = require('../data/employeeQuestions');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('vote', async (data) => {
      try {
        const { questionKey, optionKey, isEmployee } = data;

        await Vote.create({
          questionKey,
          optionKey,
          isEmployee
        });
        // socket.emit('voteSuccess', { success: true });
      } catch (err) {
        // socket.emit('error', 'Failed to save vote');
      }
    });
  });
}; 