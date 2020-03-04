import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

export default function Example2() {
	const classes = useStyles();
	const [value, setValue] = React.useState('Controlled');
	const [error, setError] = React.useState('');
  const handleChange = event => {
	setValue(event.target.value);
	
	if (event.target.value.length >= 8 ){
		console.log("uzun")
		setError("");
	} else {
		setError("input too short!");
	}
	
	if (isNaN(event.target.value)){
		setError('input not numeric');
	} else {
		console.log("input is numeric. go on..");
	}
  };


	return (
		<div className={classes.root} >
			<Button variant="contained">Default</Button>
			<Button 
			startIcon = {<DeleteIcon/>}> Primary</Button> 
			<Button variant="outlined" color="secondary">Secondary outlined</Button>
		
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={value}
          onChange={handleChange}
		  variant="outlined"
		  error={error}
		  helperText={error}
        />
		
		</div>
	);
}

