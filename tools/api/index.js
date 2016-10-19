const router = require('express').Router();
const tales = require('./tales');
const chapters = require('./chapters');
const users = require('./users');

router.use('/tales', tales);
router.use('/chapters', chapters);
router.use('/users', users);

module.exports = router;
