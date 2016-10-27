const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const SNIPPET_LENGTH = 200;

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

taleSchema.methods.getSnippet = function getSnippet(cb) {
  const firstChapterId = this.chapters[0];
  return this.model('Chapter')
    .findById(firstChapterId)
    .then((firstChapter) => {
      const text = firstChapter.text;
      if (cb) cb(snipText);
      return snipText(text);
    });
};


function snipText(text) {
  return `${text.slice(0, SNIPPET_LENGTH)}...`;
}


const Tale = mongoose.model('Tale', taleSchema);

module.exports = Tale;
