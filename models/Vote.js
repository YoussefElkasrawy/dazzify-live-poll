const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    userId: { type: String, required: true, index: true },
    questionKey: { type: String, required: true, index: true },
    optionKey: { type: String, required: true },
    isEmployee: { type: Boolean, required: true, index: true },
    timestamp: { type: Date, default: Date.now, index: true }
});

// Create compound index for efficient querying
voteSchema.index({ questionKey: 1, isEmployee: 1 });

module.exports = mongoose.model('Vote', voteSchema); 