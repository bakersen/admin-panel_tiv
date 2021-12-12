import React from 'react';
import clsx from 'clsx';
import { makeStyles,createTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import './temporarydrawer.css';
import FullWidthTabs from '../tabs/FullWidthTabs';


const useStyles = makeStyles((theme) => ({
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const theme = createTheme();
  theme.typography.p={
    fontSize: 8,
  }


export default function TemporaryDrawer({job}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h3>
        <Avatar >
          {job.initials}
        </Avatar>
          <span>&nbsp;</span>
          {job.jobTitle}
        </h3>
      </List>
      <Divider />
      <List>
        <FullWidthTabs job={job} />
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={job.id}>
          
          <Typography variant="p" role='button' onClick={toggleDrawer(anchor, true)} style={{textTransform: 'none'}}>{job.jobTitle} </Typography >
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
