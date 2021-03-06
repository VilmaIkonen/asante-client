import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
  },
  paper: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.third.main
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  heading: {
    marginBottom: '2rem'
  },
  fileInput: {
    width: '92%',
  },
  buttonClear: {
    borderRadius: '10px',
    marginBottom: '1rem',
    padding: '.8rem 1.6rem',
    backgroundColor: theme.palette.light.main,
    color: theme.palette.dark.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.dark.main
    }
  }
}));