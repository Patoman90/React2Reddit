import React from 'react';
import { Container, Typography} from '@material-ui/core';
import { footerStyles } from '../assets/FooterStyles';


export const Footer = () => {

    const classes = footerStyles();

    return(
        <Container className={classes.footer} minWidth="xs">
            <footer>
                <Typography variant='h4'>
                    Project by Patrick
                </Typography>
            </footer>
        </Container>
    );

};