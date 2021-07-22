import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CategoryNav(){

const classes = useStyles();
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
       <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"

        centered
      >

        <Tab
         label="Brands"
         component={Link}
         to={'/'}
         />

        <Tab
        label="Make Up"
        component={Link}
        to={'/categories/1'} />
        <Tab
        label="Skincare"
        component={Link}
        to={'/categories/2'} />
        <Tab
        label="Fragrance"
        component={Link}
        to={'/categories/3'} />
        <Tab
        label="Haircare"
        component={Link}
        to={'/categories/4'} />

      </Tabs>

    </Paper>
  );




}
