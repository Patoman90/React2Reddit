import React from 'react';
import RedditIcon from '@material-ui/icons/Reddit';
import { Container, AppBar, Typography, Toolbar} from '@material-ui/core';
import { SearchReddit } from './Search';
import { headerStyles } from '../assets/HeaderStyles';


export const Header = () => {

    const classes = headerStyles();
    
    return(
            <Container >
                <AppBar className={classes.container} position="relative">
                    <Toolbar className={classes.toolbar}>
                            <RedditIcon className={classes.RedditIcon}/>
                            <Typography variant="h3" className={classes.title} noWrap>
                                React2Reddit
                            </Typography>
                            <SearchReddit noWrap/>
                    </Toolbar>
                </AppBar>
            </Container>
    );

};