import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import {useTranslation} from 'react-i18next';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default function Filters(props) {
    const {t} = useTranslation();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">{t('rules')}</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={props.filters.animals} onChange={props.filterHandleChange('animals')} value="animals" />}
                        label={t('animals')}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={props.filters.kids_welcome} onChange={props.filterHandleChange('kids_welcome')} value="kids_welcome" />}
                        label={t('kids')}
                    />
                    <TextField name="name" id="standard-basic" label="Name" onChange={props.onFilterChange} />
                </FormGroup>
                {/*<FormHelperText>Shelter name</FormHelperText>*/}
            </FormControl>
        </div>
    );
}
