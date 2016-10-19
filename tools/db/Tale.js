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

taleSchema.methods.getSnippet = function(cb) {
  let firstChapterId = this.chapters[0];
  return this.model('Chapter')
    .findById(firstChapterId)
    .then(firstChapter => {
      let text = firstChapter.text;
      return snipText(text);
    })
}


function snipText(text) {
  return text.slice(0, 100)
}


const Tale = mongoose.model('Tale', taleSchema);

module.exports = Tale;
