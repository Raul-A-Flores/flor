import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';

export default makeStyles((theme) => ({

  movie:{
      padding: '10px',
      
  },
  links:{
    alignItems: 'center',
    fontweight: 'bolder',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    '&:hover': {
      cursor: 'pointer',

    }
  },

  image:{
    borderRadius: '20px',
    height: '300px',
    marginBottom: '10px',
    '&hover':{
      transform: 'scale(1.05)',
    }

  },
  title: {
      color: theme.palette.text.primary
,
      textOverflow: 'ellipsis',
      width: '230px',
      overflow: 'hidden',
      marginTop: '10px',
      marginBottom: 0,
      textAlign: 'center',

  },
}));
