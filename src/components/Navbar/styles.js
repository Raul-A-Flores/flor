import { makeStyles } from '@mui/styles';
import {height} from '@mui/system';

const drawerWidth = 240;

export default makeStyles((theme) => ({

  toolbar: {
    height: '80px', 
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      flexWrap: 'wrap',
    },

  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
    drawer:{
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },

    },
  
    drawerPaper: {
      width: drawerWidth,

    },

  
    linkButton: {

      '&:hover': {
        color: 'white !important',
        textDecoration: 'none',
      }
    },
    language:{
      fontSize: '15px',
      fontWeight: '800',
      marginLeft: '5px',
      marginRight: '10px'
    }
    
  

}));



