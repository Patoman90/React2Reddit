import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import json2mq from 'json2mq';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import RedditIcon from '@material-ui/icons/Reddit';
import { SearchReddit } from './Search';

//Responsiveness
const MediaQueryTypes = () => { 
    useMediaQuery(
        json2mq([
            //Mobile
            { minWidth: 280, maxWidth: 500, handheld: true, orientation: 'portrait' },
            //Tablet
            { minWidth: 500, maxWidth: 800, handheld: true, orientation: 'Landscape' },
            //Desktop
            { minWidth: 801, maxWidth: 1500, handheld: false, screen: true, orientation: 'Landscape' }
        ])
    )
};    



//Styles
const headerStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
    RedditIcon: {
      marginRight: theme.spacing(2),
      color:'white',
    },
  }));

export const Header = () => {
    const mediaSize = MediaQueryTypes;
    const classes = headerStyles;
    


    return(
            <Container {...mediaSize.json2mq}>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Grid item xs={12}>
                                <RedditIcon fontSize='large'  className={classes.RedditIcon} />
                            </Grid>
                            <Grid item xs={12}>
                                <h1 className={classes.title} noWrap>
                                    React2Reddit
                                </h1>
                            </Grid>
                            <Grid item xs={12}>
                                <SearchReddit />
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </div>
            </Container>
    );

};