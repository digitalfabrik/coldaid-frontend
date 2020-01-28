import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));
function FiltersStateManagement() {
    
}
export default function CheckboxesGroup(props) {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Rules</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={props.filters.animals} onChange={props.filterHandleChange('animals')} value="animals" />}
                        label="Pets"
                    />
                    <TextField name="name" id="standard-basic" label="Name" onChange={props.onFilterChange} />
                </FormGroup>
                {/*<FormHelperText>Shelter name</FormHelperText>*/}
            </FormControl>
        </div>
    );
}
