import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import SimpleSelect from '../dropdown'
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import {userService} from '../../_services'
import {getUserId} from '../../_helpers'
import moment from 'moment'
const BID_AMOUNT=[
    {
        "key": 0,
        "text": "$50",
        "value": "$50"
    },
    {
        "key": 0,
        "text": "$100",
        "value": "$100"
    },
    {
        "key": 0,
        "text": "$150",
        "value": "$150"
    }
]

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    fontFamily:'"Ubuntu", sans-serif'
  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
    fontFamily:'"Ubuntu", sans-serif',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '50%',
    padding:'0 10px'
  },
  innercolumn: {
    flexBasis: '50%',
    padding:'0 10px'
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    actionsTab:{
        backgroundColor:"black"
    }
  },
  timeValue:{
    color:"darkgrey"
  }

}));

export default function ExpansionCard({details ,history}) {
  const classes = useStyles();
  const [err,setErr]=useState(false)
  const[bidAmount,setBidAmount]=useState(0)
  function saveBid(){
    if(!bidAmount){
      setErr(true)
    }
    else{
      setErr(false)
    userService.bidService({userId:getUserId(),bookingId:details.bookingId,bidAmount}).then(
      res=>{
      history.push("/bids")
      window.location.reload()
      }
    )
    } 
  }
  function handleChange(e){
    setBidAmount(e.target.value);
  }
  return (
    <div className={classes.root}>
      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{details.subCategory}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
                <div>Booking Id</div>
                <div>#{details.bookingId}</div>
                </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.innercolumn}>
            <div style={{fontSize:"12px"}}>Service Time</div>
            <div className={classes.timeValue}>{moment(details.serviceTime).format("hh:mm a")}</div>
          <SimpleSelect handleChange={handleChange} initialValue=""  error={err} name="bidAmount" label="Bid Amount"
           timedata={BID_AMOUNT} />
          </div>
          <div className={clsx(classes.innercolumn, classes.helper)}>
            <Typography variant="caption">
                {details.address},{details.city}
                <div>      
                   {details.phoneNo}
                    <AddIcCallIcon style={{ height:'15px',width:'15px',margin:'-2px 5px' }} />
                </div>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions className={classes.actionsTab}>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary" onClick={()=>saveBid()}>
            Bid
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}
