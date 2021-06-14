import React from 'react';
import {useDispatch } from 'react-redux'

import {deleteBlog , likeBlog } from '../../../Action/index';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';
import { Card, CardActions, CardMedia, Button,  Typography } from '@material-ui/core/';
import moment from 'moment';
import { ThumbUpAltOutlined } from '@material-ui/icons';
import useStyles from  './style.js'


const DisplayBlog = ({ reverseBlog, setCurrentId}) => {

  const classes = useStyles();
  const dispatch = useDispatch()
  const user =JSON.parse(localStorage.getItem('profile'));
const history = useHistory()
  const Likes = () => {
    if (reverseBlog.likes.length > 0) {
      return reverseBlog.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{reverseBlog.likes.length > 2 ? `You and ${reverseBlog.likes.length - 1} others` : `${reverseBlog.likes.length} like${reverseBlog.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{reverseBlog.likes.length} {reverseBlog.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <>&nbsp;Like</>;
  };

    return ( 
        < div className='display_blog_container col-md-6 col-12 col-sm-6'>
      <Card className={classes.card} className='mt-md-0 my-md-2 mt-3 '>
      
      <CardMedia className={classes.media} image={reverseBlog.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
      <div className={classes.overlay}>
        <Typography variant="h6">{reverseBlog.name}</Typography>
        <Typography variant="body2">{moment(reverseBlog.createdAt).fromNow()}</Typography>
      </div>
  
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{reverseBlog.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.details} gutterBottom variant="h5" component="h2">{reverseBlog.headLine}</Typography>
         <p className={classes.details}>
           {reverseBlog.details.slice(0,200)} 
           </p>
       
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likeBlog(reverseBlog._id))}>
          <Likes />
        </Button>
        {(user?.result?.googleId === reverseBlog?.creator || user?.result?._id === reverseBlog?.creator) && (
        <Button size="small" color="primary"  onClick={()=> setCurrentId(reverseBlog._id)}>
         Update
        </Button>
        )}
        {(user?.result?.googleId === reverseBlog?.creator || user?.result?._id === reverseBlog?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deleteBlog(reverseBlog._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
         
          
        </div>
    );
};

export default DisplayBlog;