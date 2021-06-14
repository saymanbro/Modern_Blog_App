import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
export default makeStyles((theme) => ({
toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '200px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
 purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

