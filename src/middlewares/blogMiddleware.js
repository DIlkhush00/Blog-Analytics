const dotenv = require('dotenv');
dotenv.config();

const { blogAnalysis, search } = require('../analysis/blogAnalysis');

const options = {
    method: 'GET',
    headers: {
      'x-hasura-admin-secret': process.env.SECRET_KEY,
    }
};

async function getBlogs(req, res)
{
    try{
        // Getting the response (blog data)
        const response = await fetch(process.env.URL, options);
    
        // Handling the error
        if(!response.ok)
        {
            throw new Error("Failed to fetch blogs");
        }
    
        const blogData = await response.json();

        const newblogData = blogAnalysis(blogData);

        res.json(newblogData);
        
    } catch(err)
    {
        res.status(500).json({error: 'Internal server error'});
    }

}

async function searchBlogs(req, res)
{
    try{
        // Getting the response (blog data)
        const response = await fetch(process.env.URL, options);
    
        // Handling the error
        if(!response.ok)
        {
            throw new Error("Failed to fetch blogs");
        }
    
        const blogData = await response.json();
        
        const result = search(blogData.blogs, req.query.query); // passing the blogs array

        res.json({result});
        
    } catch(err)
    {
        res.status(500).json({error: 'Internal server error'});
    }

}

module.exports = { getBlogs, searchBlogs };