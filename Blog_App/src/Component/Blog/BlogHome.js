import React, { useState } from 'react';

import Display from './BlogdisAndCre/DisplayBlog'
import CreateBlog from './BlogdisAndCre/CreateBlog'
import {useSelector  , useDispatch} from 'react-redux';
import { Paper ,  TextField, Button  } from '@material-ui/core';
import { useHistory , useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';


 import {  getBlogBySearch } from '../../Action/index';


function useQuery(){
    return new URLSearchParams(useLocation().search)
}

const BlogHome = ({  setCurrentId, currentId}) => {
 
 const [search, setSearch ] = useState('')
 const [ tags, setTags ]  = useState([]);
const dispatch = useDispatch();

 const query = useQuery();
 const history = useHistory();

const reverseBlog = useSelector((state)=> state.blogs);
const handleAdd = (tag) => setTags([ ...tags, tag])
const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete))

 


const searchBlog = () => {
    if(search === '' && tags === "") history.push('/blog');
    else if(search.trim() || tags){
         // dispatch => fetch search post 
         dispatch(getBlogBySearch({ search , tags: tags.join(',')}))
         history.push(`/blog/search?searchQuery=${search || 'none' }&tags=${ tags.join(',')}`);
         setSearch('');
         setTags([])
     } 
   
}

const handleKeyPress = (e) => {
 
    if(e.keyCode === 13){
        // search
        searchBlog();
    }
}

    return (
        <>
      
                <div className="container-fluid px-5">
           
                            <div className="row "> 
                                        <div className="col-md-8 order-1 order-md-0 ">
                                                <div className="row">  
                                               { 
                                                 !reverseBlog.length ?
                                                  <div className="d-flex justify-content-center">
                                                         <div className="spinner-border" role="status">
                                                             <span className="visually-hidden">Loading...</span>
                                                         </div>
                                                    </div>
                                               : 
                                                   ( 
                                                    reverseBlog.map((reverseBlog)=>(
                                                        <Display  setCurrentId={setCurrentId} key={reverseBlog._id} reverseBlog={reverseBlog} />
                                                      )))    
                                                 }                 
                                                </div>
                                           
                                </div>           
                                <div className="col-md-4 order-0 order-md-1 ">
                                   
                                  <Paper className=" mb-3 p-2">
                                  <TextField 
                                    type="text" 
                                    label='Search Memories'
                                     value={search}
                                     onChange={(e)=> setSearch(e.target.value)}
                                     onKeyPress={handleKeyPress}
                                     className=" my-3"
                                       />
                                        <ChipInput
                                            style={{ margin: '10px 0'}}
                                            value={tags}
                                            onAdd={handleAdd}
                                            onDelete={handleDelete}
                                            label=' Search Tag'
                                            variant="outlined"
                                    />
                                    <Button onClick={searchBlog} fullWidth color='primary' variant='contained'>Search</Button>
                                  </Paper>
                                   
                                <CreateBlog currentId={currentId} setCurrentId={setCurrentId} />
                               

                                </div>
                            </div>
                        
                   
                </div>
        </>
    );
};

export default BlogHome;