import React, { useContext,Component, useEffect } from 'react';
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import UserContext from '../../UserContext'

const useStyles = makeStyles({
  list: {
    width: 250,
    fontFamily:`Ubuntu',sans-serif `
  }
});


export default function SwipeableTemporaryDrawer({history}) {
  const {
    stateToggle:[toggle,setToggle]
  }= useContext(UserContext)
  
  const classes = useStyles();
  const [state, setState] = React.useState({
    left:toggle
  });  

  useEffect(()=>{
    setState({left:toggle })
  },[toggle])

  const toggleDrawer = () => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setToggle(toggle?false:true) 
    setState(state.left?{left:false}:{left:true})
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={()=>toggleDrawer()}
      onKeyDown={()=>toggleDrawer()}
    >
      <List>
        {[{value:'Home',link:'/home'},{value:'My Bookings',link:'/my-bookings'}].map((text, index) => (
          <Link to={text.link} onClick={()=>{history.push(text.link); setToggle(false);setState({left:false})}}>
          <ListItem button key={text.value}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text.value} />
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[{value:'Bid',link:'/bids'},{value:'My Bids',link:'/my-bids'}].map((text, index) => (
          <Link to={text.link} onClick={()=>{history.push(text.link); setToggle(false);setState({left:false})}}>
          <ListItem button key={text.value}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text.value} />
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[{value:'Privacy Policy',link:'/privacy-policy'},{value:'Terms of Use',link:'/terms-of-use'}].map((text, index) => (
          <Link to={text.link} onClick={()=>{history.push(text.link); setToggle(false);setState({left:false})}}>
          <ListItem button key={text.value}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text.value} />
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={state?.left}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
        disableSwipeToOpen={true}
      >
        {sideList('left')}
      </SwipeableDrawer>

    </div>
  );
}


