import React from 'react';
import { AppBar, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './stylesNavBar';
import ThemeLogo from '../Logo/themeLogo'

const Header = () => {

  const classes = useStyles();

  return (  
    <AppBar elevation={0} className={classes.appBar} position="static">
      <Grid className={classes.brandContainer}>
        <Grid item md={4} lg={12}>
           <ThemeLogo className={classes.logo}/>
        </Grid>       
        <Grid item md={8} lg={12}>
          <Typography component={Link} to='/' className={classes.heading} variant="h1" align="center">Asante</Typography>   
        </Grid>   
      </Grid>
      <Typography className={classes.heading2} variant="h2" align="center">Thank or congratulate your colleague for a job well done!</Typography>      
    </AppBar>
  );
};

export default Header;