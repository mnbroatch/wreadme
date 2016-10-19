const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const chapterSchema = new mongoose.Schema({
  title: String,
  text: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
