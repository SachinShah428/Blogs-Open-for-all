import React , {  useState } from 'react';
import { Grid, CircularProgress , Card , Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from '../Posts/Post/Post';
import useStyles from './styles';

const World = ( ) => {
  const [currentId, setCurrentId] = useState(0);
  const posts = useSelector((state) => state.posts );
  console.log ( posts ) ;
  const classes = useStyles();
  const sachin = JSON.parse(localStorage.getItem('sachin'));
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log ( sachin ) ;
  console.log ( user ) ;
  let count = 0 ;

  posts.map
  ((post)  => ((post?.Cid === sachin)) && (count = count + 1) )

  return (

    ! count ? <Card className={classes.card}>
      
    <Typography className={classes.title} gutterBottom variant="h5" component="h2">No Repositories Created</Typography>

    </Card> : (

      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {
         posts.map
         ( ( post )  => 
           ( ( post?.Cid === sachin )   ) && (
             <Grid key={post._id} item xs={12} sm={6} md={6}>
               <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
           )
         ).reverse()
       }
      </Grid>
    )
   );
};
export default World ;