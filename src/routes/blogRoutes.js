const express = require('express');
const router = express.Router();

const { getBlogs, searchBlogs } = require('../middlewares/blogMiddleware');


// Routes
router.get('/blog-stats', getBlogs);
router.get('/blog-search', searchBlogs);

module.exports = router;