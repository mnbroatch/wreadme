const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const taleSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  chapters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter',
  }],
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
});

const Tale = mongoose.model('Tale', taleSchema);

module.exports = Tale;
