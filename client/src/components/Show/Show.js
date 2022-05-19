import React , { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ShowPost from '../Posts/Post/ShowPost';
import useStyles from './styles';

const Show = ( ) => {
  
  const idea = JSON.parse(localStorage.getItem('cur'));
  const posts = useSelector((state) => state.posts);
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  return (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
    
    {
      posts.map
      ( ( post )  => 
      ( post._id === idea ) && (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
           <ShowPost post={post} setCurrentId={setCurrentId} />
        </Grid>
        )
      
     )
    }

  </Grid>
  );
};

export default Show ;


