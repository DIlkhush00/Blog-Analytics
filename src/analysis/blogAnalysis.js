const _ = require('lodash');

const data = {};

const blogAnalysis = (blogs) => {
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
    let titlesWithPrivacy = _.filter(blogs, blog => _.includes(_.toLower(blog.title), keyword));
    return _.size(titlesWithPrivacy);
}


module.exports = { blogAnalysis };