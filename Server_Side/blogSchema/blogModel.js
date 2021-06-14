import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    headLine:{
        type:String,
        required:true
    },
    name:String,
    creator:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:new Date().toLocaleString()
    },
    tags:[String],
    selectedFile:String,
    likes: {
        type: [String],
        default: [],
    },
    details:{
        type:String,
        required:true
    }
})


const Blog = new mongoose.model('Blog',blogSchema);

export default Blog;