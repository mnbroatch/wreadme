const router = require('express').Router();
const Tale = require('../db/Tale');

router.route('/top')
  .get((req, res) =>
    Tale.find({}).sort({ rating: -1 }).limit(3)
      .then(tales => res.send(tales))
      .catch(err => res.status(400).send(err))
  );

router.route('/')
  .get((req, res) => {
    Tale.find({})
      .then(tales => res.send(tales))
      .catch(err => res.status(400).send(err));
  })
  .post((req, res) => {
    const taleToSave = new Tale(req.body);
    return taleToSave.save()
      .then(tale => res.send(tale))
      .catch(err => res.status(400).send(err.toString()));
  });

router.route('/:taleId')
  .get((req, res) => {
    Tale.findById(req.params.taleId)
      .then(tale => res.send(tale))
      .catch(err => res.status(400).send(err));
  })
  .put((req, res) => {
    Tale.findByIdAndUpdate(req.params.taleId, req.body, { new: true })
      .then(tale => res.send(tale))
      .catch(err => res.status(400).send(err));
  })
  .delete((req, res) => {
    Tale.findByIdAndRemove(req.params.taleId)
      .then(tale => res.send(tale))
      .catch(err => res.status(400).send(err));
  });

router.route('/snippet/:taleId')
  .get((req, res) => {
    Tale.findById(req.params.taleId)
      .then(thing => thing.getSnippet())
      .then(snippet => res.send(snippet))
      .catch(err => res.status(400).send(err));
  });

module.exports = router;

