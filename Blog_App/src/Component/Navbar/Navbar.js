import React, { useEffect, useState } from 'react';
import {Link , useHistory, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';
import icons from '../../image/blog.png';
import { Toolbar, Avatar, Button } from '@material-ui/core';
import useStyles from './styles';
import {LOGOUT } from '../constant/index';
const Navbar = () => {
  const classes = useStyles()
  const location = useLocation();
  const history = useHistory()
  const dispatch = useDispatch();

;

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const logout = () => {
    dispatch({type: LOGOUT})
    history.push('/');
    setUser(null);
  }
  useEffect(()=>{
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location])

    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
 <Link className="navbar-brand" to="/">
   <img src={icons} className='icons' alt=""/>
 </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto align-items-center">
      <li className="nav-item ">
       <Link className="nav-link" exact='true' to="/">Home</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" exact='true' to="/blog">Blog</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" exact='true' to="/about">About</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" exact='true' to="/author">Author</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" exact='true' to="/contactUs">Contact</Link>
      </li>
      <li className="nav-item">
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            {/* <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography> */}
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
      </li>
    </ul>
   
  </div>
</nav> 
        </>
    );
};

export default Navbar;