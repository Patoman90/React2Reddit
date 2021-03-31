import { makeStyles } from '@material-ui/core/styles';


//Responsiveness
 
//Styles
export const headerStyles = makeStyles((theme) => (
    {
        container:{
          backgroundColor: '#404bce',
        },
        toolbar:{
                width: 'auto',
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