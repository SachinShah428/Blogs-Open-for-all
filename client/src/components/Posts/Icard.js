import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { Link, useNavigate , useLocation  ,useHistory  } from 'react-router-dom';
import useStyles from './styles';

const Icard = ( {creator} ) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  const location = useLocation();
  const navigation = useNavigate();
  const navigate = useNavigate() ;

  const handleClick = ( creator ) => {
    console.log ( creator._id ) ;
    localStorage.setItem('sachin', JSON.stringify( creator._id ) );
    navigate('/world');
  }

  let clr = 'blue';
  let nme = creator.name ;
  if ( creator?._id === user?.result?._id ) clr = '#006400'

  if ( creator?._id === user?.result?._id ) nme = 'You'

  return (
    <Card className={classes.card} style={{ color: clr }}  >
      
      <CardMedia className={classes.media} image={ 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445__340.jpg'}/>
      <div className={classes.overlay}>
        <Typography variant="h6">Creator : {nme} </Typography>
        <Button onClick={() => handleClick ( creator ) } style={{ color: clr }} size="small" variant="h5" >
          View 
        </Button>
      </div>
    </Card>
  );
};

export default Icard ;