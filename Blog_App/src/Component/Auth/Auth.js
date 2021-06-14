import React, { useState } from 'react';
import useStyles from './styles'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import {signIn, signUp} from '../../Action/index';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import {AUTH} from '../constant/index'
import Icon from './icon.js';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword);
// const isSignUp = true
  const switchMode = () => {
      setIsSignUp( (previousIsSignup)=> !previousIsSignup );
      setShowPassword(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (isSignUp) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token= res?.tokenId ;
  
    try{
        dispatch({type: AUTH, data:{result, token}});
        history.push('/blog')
    }catch(e){
        console.log(e);
    }
  };

  const googleError = (e) => ('Google Sign In was unsuccessful. Try again later'+ e);


    return (
        <div>
          <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignUp ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignUp && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignUp ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin
            clientId="168243066105-cd2m38f0j123cgf00lb2h3a0ileseoee.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
        </div>
    );
};

export default Auth;