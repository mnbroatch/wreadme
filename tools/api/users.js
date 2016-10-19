const router = require('express').Router();
const User = require('../db/User');

router.route('/')
  .get((req, res) =>
    User.find({})
      .then(users => res.send(users))
      .catch(err => res.status(400).send(err))
  )
  .post((req, res) => {
    const userToSave = new User(req.body);
    return userToSave.save()
      .then(user => res.send(user))
      .catch(err => res.status(400).send(err));
  });

router.route('/:userId')
  .get((req, res) =>
    User.findById(req.params.userId)
      .then(user => res.send(user))
      .catch(err => res.status(400).send(err))
  )
  .put((req, res) =>
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
      .then(user => res.send(user))
      .catch(err => res.status(400).send(err))
  )
  .delete((req, res) =>
    User.findByIdAndRemove(req.params.userId)
      .then(user => res.send(user))
      .catch(err => res.status(400).send(err))
  );

module.exports = router;
