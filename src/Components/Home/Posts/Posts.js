import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
// Fetching data from the global Redux store (selectors):
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './stylesPosts'

const Posts = ({setCurrentId}) => {
  
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={4}>      
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6} lg={4} xl={3}>
            <Post post={post} setCurrentId={setCurrentId}/>
          </Grid>
        ))}
      </Grid>    
    )
  )
}

export default Posts;

  // If no posts, show loading spinner, else show grid
  // loop over the posts w map()  
  // Grid: on small devices, post takes 12 / 12 spaces, in M/L 6 / 12 spaces
  // Single post logic in Post.js