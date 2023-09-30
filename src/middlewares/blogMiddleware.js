const dotenv = require('dotenv');
dotenv.config();

const { memo_blogAnalysis, memo_search } = require('../analysis/blogAnalysis');

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

        const newblogData = memo_blogAnalysis(blogData);

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
        
        const keyword = req.query.query;
        const result = memo_search(blogData.blogs, keyword); // passing the blogs array

        if(result.length != 0)
        {
            res.json({result});
        }
        else
        {
            res.status(404).json({error: `Could not find any blog containing the keyword '${keyword}'`});
        }
        
    } catch(err)
    {
        res.status(500).json({error: 'Internal server error'});
    }

}

module.exports = { getBlogs, searchBlogs };