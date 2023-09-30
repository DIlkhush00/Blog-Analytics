const express = require('express');
const { getBlogs } = require('../middlewares/blogMiddleware');

const router = express.Router();

router.get('/blog-stats', getBlogs);


module.exports = router;