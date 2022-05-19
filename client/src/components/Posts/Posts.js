import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import Icard from './Icard' ;
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts );
  const users = useSelector((state) => state.users );
  const classes = useStyles();
  console.log ( posts ) ;

 return (
  !users.length ? <CircularProgress /> : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {users.map((creator) => (
        <Grid key={creator._id} item xs={12} sm={6} md={6}>
          <Icard creator={creator} />
        </Grid>
      )).reverse()}
    </Grid>
  )
 );
 };

export default Posts;
