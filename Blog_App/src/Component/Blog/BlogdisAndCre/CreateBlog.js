import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from '../style';
import FileBase from 'react-file-base64';
import { useDispatch , useSelector } from 'react-redux';
import {createBlog, updateBlog} from '../../../Action/index';

const CreateBlog = ({currentId, setCurrentId}) => {

 const dispatch = useDispatch();
const user = JSON.parse(localStorage.getItem("profile"));

    const [postBlog, setPostBlog] = useState({
        headLine:"" , tags:"", details:"",selectedFile:""
    })
   const blog = useSelector((state) => currentId ? state.blogs.find((b) => b._id === currentId) : null )
    const classes = useStyles();
   
    useEffect(() => {
        if(blog)setPostBlog(blog)
    }, [blog])

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(currentId ){
            dispatch(updateBlog(currentId, {...postBlog  , name: user?.result?.name}))
        }else{
            dispatch(createBlog({...postBlog, name: user?.result?.name}))
        }  
        clear();  
    }
   
    const clear = () =>{
        setCurrentId(null)
        setPostBlog({ headLine:"" ,  tags:"", details:"", selectedFile:""})
    }

    if(!user){
        return(
            <div className="container border border-info rounded py-4">
               <strong className="text-center d-block text-danger ">
                Hello budy, Signin to Like & create  your own memories with this app !!!
               </strong>
            </div>
        )
    }
    return (
        <>
           <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6"> {currentId ? "Update" : "Create"}  A Blog </Typography>
        <TextField name="headLine" variant="outlined" label="Head Line" fullWidth value={postBlog.headLine} onChange={(e) => setPostBlog({ ...postBlog, headLine: e.target.value })} />
       
       
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postBlog.tags} onChange={(e) => setPostBlog({ ...postBlog, tags: e.target.value.split(',') })} />
        <TextField name="details" variant="outlined" label="Details" fullWidth multiline rows={4} value={postBlog.details} onChange={(e) => setPostBlog({ ...postBlog, details: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostBlog({ ...postBlog, selectedFile: base64 })} /></div>
        
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>


                           
                                
                               
        </>
    );
};

export default CreateBlog;