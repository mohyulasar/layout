import React from 'react';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
    backgroundColor: "white",
    height: "auto",
  },
  button: {
    backgroundColor: 'orange'
  },
  blue: {
    backgroundColor: 'rgb(6, 83, 136)'
  }
}));
const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <Grid container justify="space-between" direction="row" spacing={0}>
            <Grid item xs={10}>
              <ButtonGroup aria-label="split button">
                <Button className={classes.blue}
                  size="small"
                  aria-label="Delivery Type"
                  aria-haspopup="menu"
                > Delivery Type
              <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <TextField className={classes.input} label="Search for courses" variant="outlined"
              />
              <Button className={classes.button}>Search</Button>
              <Button color="secondary">ADVANCE SEARCH</Button>
            </Grid>
            <Grid>
              <b>  Hello Guest, </b> Login
              <IconButton>
                <Badge badgeContent={12} color="secondary">
                  <ShoppingCartIcon className={classes.button} />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;