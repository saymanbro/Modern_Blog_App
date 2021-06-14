import Blog from '../blogSchema/blogModel.js';
import mongoose from 'mongoose';

        // Get  all the blog 
        
 export const getBlogs = async (req,res) => {
      try{
           const newBlog = await Blog.find();
           res.json(newBlog).status(200)

        }catch(e){
            console.log(e);
        }
}

            // get Blog by search 
             
export const getBlogBySearch = async (req, res) => {
    const { searchQuery,  tags} = req.query;
    try{
            const headLine = new RegExp(searchQuery, 'i');
            const blogs = await Blog.find( { $or: [ { headLine }, { tags: { $in: tags.split(',') } } ]})
                res.json({data: blogs})
    }catch(e){
        console.log(e);
    }
}            

            // Create a new blog with

export const createBlogs = async (req, res) => {

        const {headLine,  tags, details} = req.body;
        if(!headLine || !tags || !details){
            res.status(400).json({message:"Plz fill the data"})
        }else{
            const blog = req.body
            try{
                const newBlog = new Blog({...blog, creator: req.userId, createdAt:  new Date().toISOString()});
                await newBlog.save();
                res.status(201).json(newBlog)
            }catch(e){
                console.log(e);
            }
        }

}
                // Delete Blog
export const deleteBlog = async (req, res) => {

    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).json({message:"no blog with that id"});
        await Blog.findByIdAndRemove(id)
        res.json({message:"blog deleted"})
}

                /// Update Blog 

                export const updateBlog = async (req, res) => {
                    const { id:_id } = req.params; 
                    
                    const blog = req.body;
                   try{
                   
                   
                    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send({message:'not post with that id'})
                    const updatedBlog = await Blog.findByIdAndUpdate(_id, {...blog, _id}, {new: true})
                    res.json(updatedBlog)
                   }catch(e){
                       console.log('the error' + e);
                   }
            }   
            
            export const likeBlog = async (req, res) =>{
                const {id} = req.params ;

                if(!req.userId) return res.json({message:"Unauthenticated"});

                if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:'not post with that id'})
                
                const blog = await Blog.findById(id);
                const index = blog.likes.findIndex((id)=> id === String(req.userId));
                
                if(index === -1){
                    blog.likes.push(req.userId);

                }else{
                    blog.likes = blog.likes.filter((id)=> id !== String(req.userId));

                }
                const updateBlog = await Blog.findByIdAndUpdate(id, blog, {new : true})
                res.json(updateBlog)
            
            }