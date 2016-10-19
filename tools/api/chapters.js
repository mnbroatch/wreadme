const router = require('express').Router();
const Chapter = require('../db/Chapter');

router.route('/')
  .get((req, res) => {
    Chapter.find({})
      .then(chapters => res.send(chapters))
      .catch(err => res.status(400).send(err));
  })
  .post((req, res) => {
    const chapterToSave = new Chapter(req.body);
    chapterToSave.save()
      .then(chapter => res.send(chapter))
      .catch(err => res.status(400).send(err));
  });

router.route('/:chapterId')
  .get((req, res) => {
    Chapter.findById(req.params.chapterId)
      .then(chapter => res.send(chapter))
      .catch(err => res.status(400).send(err));
  })
  .put((req, res) => {
    Chapter.findByIdAndUpdate(req.params.chapterId, req.body, { new: true })
      .then(chapter => res.send(chapter))
      .catch(err => res.status(400).send(err));
  })
  .delete((req, res) => {
    Chapter.findByIdAndRemove(req.params.chapterId)
      .then(chapter => res.send(chapter))
      .catch(err => res.status(400).send(err));
  });

module.exports = router;
