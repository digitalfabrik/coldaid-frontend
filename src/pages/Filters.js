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
export default function CheckboxesGroup() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });
    const [filters, setFilters] = React.useState({
        name:""
    });

    const onFilterChange = (event) => {
        setFilters({ ...filters, [event.target.name]: event.target.value });
        console.log(filters);
    };

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter(v => v).length !== 2;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Rules</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={gilad} onChange={handleChange('gilad')} value="gilad" />}
                        label="Male"
                    />
                    <TextField name="name" id="standard-basic" label="Standard" onChange={onFilterChange} />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
            </FormControl>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Pick two</FormLabel>
                <FormGroup>


                </FormGroup>
                <FormHelperText>You can display an error</FormHelperText>
            </FormControl>
        </div>
    );
}
