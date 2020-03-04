import React from 'react';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Paper, Typography, makeStyles, Container} from '@material-ui/core/';
import styled from "styled-components";
import { green } from '@material-ui/core/colors';
import Image from '../img/spotify.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
   color: 'green',
  },
  root: {
    height: '100vh',
    
  },
  image: {
     backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/541c0b85e4b03f1e8810dfc9/1562324988658-Y3TYATG7CXT5JJDW551O/ke17ZwdGBToddI8pDm48kOrmWGHb03nzwc4W1nKV7FIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dnS2h5LEY0WtYx9R4lbXnqfxRyuArMDVpduMtKJHm3CcW07ycm2Trb21kYhaLJjddA/spotify-playlist)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(20, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignInSide() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}> </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href="/DashBoard"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/SignUp" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </div>
  );
}