const dotenv = require('dotenv');
dotenv.config();

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
        res.json(blogData);
        
    } catch(err)
    {
        console.log("Got Error : ", err);
        res.status(500).json({error: 'Internal server error'});
    }

}

module.exports = { getBlogs };