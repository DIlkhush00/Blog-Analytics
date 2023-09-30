const express = require('express');
const { getBlogs, searchBlogs } = require('../middlewares/blogMiddleware');

const router = express.Router();

router.get('/blog-stats', getBlogs);
router.get('/blog-search', searchBlogs);

module.exports = router;