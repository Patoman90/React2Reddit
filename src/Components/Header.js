import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';    //Hook from material UI
import useMediaQuery from '@material-ui/core/useMediaQuery'; //Hook from material UI
import RedditIcon from '@material-ui/icons/Reddit';
import { SearchReddit } from './Search';

//Responsiveness
 
//Styles
const headerStyles = makeStyles((theme) => ({
    root: {
            width: 400,
        [theme.breakpoints.down('xs')]: {
            width: 200
          },
          [theme.breakpoints.up('md')]: {
            width: 600
          },
          [theme.breakpoints.up('lg')]: {
            width: 800
          },
      },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.down('xs')]: {
          display: 'block',
        },
      },
    RedditIcon: {
      marginRight: theme.spacing(2),
      color:'white',
    },
  }));

export const Header = () => {

    const classes = headerStyles;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    


    return(
            <Container>
                <div className={classes.root} container justify= "center" alignItems={matches ? 'flex-start': 'center'}>
                    <AppBar position="static">
                        <Toolbar>
                            <Grid item>
                                <RedditIcon fontSize='large'  className={classes.RedditIcon} />
                            </Grid>
                            <Grid item>
                                <h1 className={classes.title} noWrap>
                                    React2Reddit
                                </h1>
                            </Grid>
                            <Grid item>
                                <SearchReddit />
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </div>
            </Container>
    );

};