import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useNavigate , useLocation  ,useHistory  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigation = useNavigate();
  const classes = useStyles();
  const navigate = useNavigate() ;
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate('/auth');
  };
  
  useEffect(() => {
    setUser ( JSON.parse(localStorage.getItem('profile')) ) ;
    const token = user?.token;
    console.log ( token ) ;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [location] );

  const  handleClick = () => {
    navigate('/auth');
  }

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">GITHUB</Typography>
        <img className={classes.image} src= 'data:image/png;base64,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' alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button variant="contained" color="primary" onClick = { handleClick } >Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
