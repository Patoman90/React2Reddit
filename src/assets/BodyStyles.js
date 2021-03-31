import { makeStyles,
 } from '@material-ui/core';


export const BodyStyles = makeStyles((theme) => ({
    //Div container
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: '20px'
    },

    //Title typography
    title: {},

    //Add, Edit, Delete buttons
    button: {
      marginTop: '40px'
    },

    //Card styles
    cardGrid: {
      padding: '20px 0'
    },
    card:{
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardMedia: {
      paddingTop: '56.25%'
    },
    cardContent: {
      flexGrow: 1,
    },

  }));
  