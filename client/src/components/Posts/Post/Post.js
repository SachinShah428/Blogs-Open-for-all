import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { Link, useNavigate , useLocation  ,useHistory  } from 'react-router-dom';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  const location = useLocation();
  const navigation = useNavigate();
  const navigate = useNavigate() ;

  const Likes = () => {
    if (post.likes.length > 0) {

      return post.likes.find((like) => like === ( user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  const handleClick = ( post ) => {
    localStorage.setItem('cur', JSON.stringify( post._id ));
    navigate('/show');
  }

  return (
    <Card className={classes.card}>
      
      <CardMedia className={classes.media} image={ 'data:image/png;base64,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'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="body2">Creator : {post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay1}>
        <Button onClick={() => handleClick ( post ) } color="blue" size="small">
          <ArrowForwardIcon fontSize="small" /> View
        </Button>
      </div>
      
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">Title : {post.title}</Typography>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2"> Tags : {post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      
      <CardActions className={classes.cardActions}>
      <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id , user ))}>
          <Likes />
        </Button>
        {( user?.result?._id === post?.Cid ) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
