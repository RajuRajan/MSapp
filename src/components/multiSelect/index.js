import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  formControl: {
    // margin: theme.spacing(1),
    width:'100%',
    padding:'0px'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const works = [
  "Electricians",
  "Plumbers",
  "Carpenters",
  "Woodwork and Furniture Making",
  "Bathroom Deep Cleaning",
  "Kitchen Deep Cleaning",
  "Sofa Cleaning",
  "Pest Control",
  "Full Home Deep Cleaning",
  "Car Cleaning",
  "Carpet Cleaning",
  "Geyser Service and Repair",
  "Microwave Repair",
  "Washing Machine Service & Repair",
  "Refrigerator Repair",
  "AC Service and Repair",
  "RO or Water Purifier Repair",
  "Chimney Cleaning & Repair",
  "Television Repair & Installation",
  "Room Heater & Air Cooler Repair",
  "Mixer & Grinder Repair",
  "House Painters",
  "Party Decoration",
  "Fitness Trainer at Home",
  "Yoga Trainer at Home",
  "Dietician",
  "Men's Haircut & Grooming",
  "Salon at Home for Women",
  "Massage for Men",
  "Massage for Women",
  "Makeup and Hairstyling",
  "Fitness Trainer at Home",
  "Yoga Trainer at Home"
];

function getStyles(name, worksKnown, theme) {
  return {
    fontWeight:
      worksKnown.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({handleChange,handleChangeMultiple,worksKnown}) {
  const classes = useStyles();
  const theme = useTheme();


  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Works Known</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={worksKnown}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} clearable />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {works.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, worksKnown, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    
    </div>
  );
}
