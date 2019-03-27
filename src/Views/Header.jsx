import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LOGO from '../assets/nationalfoodlogo.png';
import {Link} from 'react-router-dom';
import ProductMenu from '../Menus/ProductMenu';
import IndustryMenu from '../Menus/IndustryMenu';
import AboutMenu from '../Menus/AboutMenu';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  bgColor:{
      backgroundColor:'#698ec6'
  },
  barMargin:{
      marginRight:'2%'
  },
  textDecor:{
      textDecoration:'none',
      color:'white'
  }
};

class ButtonAppBar extends React.Component {
 
  render()
  {
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bgColor}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <img src={LOGO} alt="logo" />
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Hidden smDown>
              <Grid container spacing={24}>
                <Grid item xs={2}>
                    <ProductMenu/>
                </Grid>
                <Grid item xs={2}>
                    <IndustryMenu/>
                </Grid>
                <Grid item xs={2}>
                    <AboutMenu/>
                </Grid>
            </Grid>
            </Hidden>
          </Typography>
          <Hidden mdUp>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon style={{float:'right'}}/>
          </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);