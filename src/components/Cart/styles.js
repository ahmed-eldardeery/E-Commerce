
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
      marginBottom: '5px !important',
      marginRight: '20px  !important',
    
  },
  checkoutButton: {
    minWidth: '150px',
    marginBottom: '5px !important',
    backgroundColor: "#2e4ca5 !important"
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')] : {
      flexDirection: "column"
    }
  },
  
}));