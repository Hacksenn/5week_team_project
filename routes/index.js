const express = require('express');
const router = express.Router();

const signUpRouter = require('./signup.routes');
const postsRouter = require('./posts');
const commentRouter = require('./comments');
const usersRouter = require('./users');

router.use('/signup', signUpRouter);
router.use('/', usersRouter);
router.use('/comments', commentRouter);
router.use('/posts', postsRouter);
router.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
