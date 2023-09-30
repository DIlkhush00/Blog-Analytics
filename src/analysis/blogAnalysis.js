const _ = require('lodash');

const data = {};

function blogAnalysis(blogs) {
    // total number of blogs
    data['total'] = _.size(blogs.blogs);

    // Finding the blog with longest title
    data['longestTitle'] = _.maxBy(blogs.blogs, blog => blog.title.length);

    // Determine the number of blogs with titles containing the word "privacy"
    data['titlesWithPrivacy'] = titlesWithPrivacy(blogs.blogs);

    // Create an array of unique blog titles (no duplicates)
    data['uniqueTitles'] = _.uniqBy(blogs.blogs, blog => blog.title);

    return data;
}


function titlesWithPrivacy(blogs)
{
    // finding the title with the word 'privacy'
    let keyword = "privacy";
    let titlesWithPrivacy = _.filter(blogs, blog => _.includes(_.toLower(blog.title), _.toLower(keyword)));
    return _.size(titlesWithPrivacy);
}

function search(blogs, keyword)
{
    let data = _.filter(blogs, blog => _.includes(_.toLower(blog.title), _.toLower(keyword)));
    return data;
}

const memo_blogAnalysis = _.memoize(blogAnalysis);
const memo_search = _.memoize(search, (blogs, keyword) => `${JSON.stringify(blogs)}-${keyword}`);


module.exports = { memo_blogAnalysis, memo_search };