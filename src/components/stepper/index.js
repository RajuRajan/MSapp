import React, { useState, useEffect } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import TimeInput from 'material-ui-time-picker'
import SimpleSelect from '../dropdown';
import timedata from '../../time.json';
import moment from "moment"

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        color: 'black',
        fontFamily: `Ubuntu',sans-serif `,
        fontSize: '12px'
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        // marginTop: theme.spacing(1),
        // marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Select address', 'Select time', 'Payment'];
}

function getStepContent(stepIndex, handleChange, handleTimeChange, handleBidChange , state) {
    switch (stepIndex) {
        case 0:
            return (
                <div >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="city"
                                name="city"
                                variant="outlined"
                                required
                                fullWidth
                                id="city"
                                label="City"
                                error={state.tabOneError&& !state.city && true} 
                                onChange={handleChange}
                                value={state.city}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="pincode"
                                name="pincode"
                                variant="outlined"
                                required
                                fullWidth
                                id="pincode"
                                label="Pincode"
                                onChange={handleChange}
                                value={state.pincode}
                                error={state.tabOneError&& !state.pincode && true} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="address"
                                name="address"
                                variant="outlined"
                                required
                                fullWidth
                                id="address"
                                label="Address"
                                multiline
                                value={state.address}
                                onChange={handleChange}
                                error={state.tabOneError&& !state.address && true} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="phoneNo"
                                name="phoneNo"
                                variant="outlined"
                                required
                                fullWidth
                                id="phoneNo"
                                label="Phone No"
                                multiline
                                value={state.phoneNo}
                                onChange={handleChange}
                                error={state.tabOneError&& !state.phoneNo && true} 
                            />
                        </Grid>
                    </Grid>
                  {state.tabOneError&&<div style={{paddingTop:"5px",color:"red"}}>Fill all required field</div>}  
                </div>

            )
                ;
        case 1:
            return (
                <div>
                    <div className="booking-stepper-label">Select service time</div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TimeInput
                                name="serviceTime"
                                mode='12h'
                                placeholder="Service Time"
                                onChange={handleTimeChange}
                                value={state.serviceTime}
                                id="serviceTime"
                                error={state.tabTwoError&& !state.serviceTime && true} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <SimpleSelect handleChange={handleBidChange} initialValue={state.bidHour}  error={state.tabTwoError&& !state.bidHour && true} name="bidHour" label="Bid Time" timedata={timedata} />
                        </Grid>

                        <Grid item xs={12} >
                        </Grid>
                    </Grid>
                    {state.tabTwoError&&<div style={{paddingTop:"5px",color:"red"}}>Fill all required field</div>}  
                </div>
            );
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper({ updateParentState }) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        if (activeStep === 0) {
            if (state.city && state.pincode && state.address && state.phoneNo) {
                setState({...state,tabOneError:false})
                 setActiveStep(prevActiveStep => prevActiveStep + 1);
            }
            else{
                setState({...state,tabOneError:true})
            }
        }
        if (activeStep === 1) {

            if (state.serviceTime && state.bidHour) {
                 setActiveStep(prevActiveStep => prevActiveStep + 1);
                 setState({...state,tabTwoError:false})
            }
            else{
                setState({...state,tabTwoError:true})
            }
        }
        if (activeStep === 2) {
             setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const [state, setState] = useState({
        bidHour: ''
    })

    useEffect(() => {
        updateParentState(state);

    }, [state]);


    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const handleTimeChange = e => {
        setState({ ...state, serviceTime: e })
    }
    const handleBidChange =e => {
        setState({ ...state , [e.target.name]:moment().add(e.target.value,'Minutes').format("HH:mm")})
    }
    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel >
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div style={{ padding: '0px 16px' }}>
                {activeStep === steps.length ? (
                    <div >
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        {/* <Button onClick={handleReset}>Reset</Button> */}
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>
                                <div style={{ padding: '20px 0px' }}>{
                                    getStepContent(activeStep, handleChange, handleTimeChange, handleBidChange, state)}
                                </div>

                            </Typography>
                            <div style={{ marginBottom: "7%" }}>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
              </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}
