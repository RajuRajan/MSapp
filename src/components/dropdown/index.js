import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
    width:"68%"
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

 function SimpleSelect({handleChange,initialvalue,error=false,name,label,timedata}) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(120);
  }, []);

//   const handleChange = event => {
//     setAge(event.target.value);
//   };

  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          name={name}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={initialvalue}
          onChange={handleChange}
          labelWidth={labelWidth}
          error={error}
        >
        {timedata.map(val=>{
            return <MenuItem value={val.value}>{val.text}</MenuItem>
        })}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>

    </div>
  );
}

SimpleSelect.propTypes = {
  timedata:PropTypes.object.isRequired,
  label:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  handleChange:PropTypes.func.isRequired,
  initialvalue:PropTypes.string.isRequired,
  error:PropTypes.bool
}

export default SimpleSelect