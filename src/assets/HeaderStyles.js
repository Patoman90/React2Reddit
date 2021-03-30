import { makeStyles } from '@material-ui/core/styles';


//Responsiveness
 
//Styles
export const headerStyles = makeStyles((theme) => (
    {
        toolbar:{
                width: 400,
            [theme.breakpoints.up('xs')]: {
                width: 250
            },
            [theme.breakpoints.down('sm')]: {
                width: 400
            },
            [theme.breakpoints.up('md')]: {
                width: 600
            },
            [theme.breakpoints.up('lg')]: {
                width: 800
            }
        },
        RedditIcon: {
          color:'white',
          fontSize: '50px',
          marginRight: '20px',
        },

        title: {
          color:'white',
          adding: 25,
        },

    }
));