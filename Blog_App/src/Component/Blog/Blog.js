import React, {useEffect, useState} from 'react';
import BlogHome from './BlogHome';
import {getBlogs} from '../../Action/index'
import {useDispatch} from 'react-redux'
import Footer from '../Footer/Footer';
const Blog = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId]= useState(null);
   
    useEffect(() => {
       dispatch(getBlogs())
      
      },[])


    return (
        <div className='main_blog_container'>
            <h1 className='text-center text-info m-4'>Express Your Self</h1>
            <BlogHome currentId={currentId} setCurrentId={setCurrentId}/>
            <Footer />
        </div>
    );
};

export default Blog;