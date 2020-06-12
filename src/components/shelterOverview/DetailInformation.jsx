import React from 'react'
import {
  Typography,
  Paper,
  makeStyles,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import CloseIcon from '@material-ui/icons/Close'
import PlaceIcon from '@material-ui/icons/Place'
import PhoneIcon from '@material-ui/icons/Phone'
import HotelIcon from '@material-ui/icons/Hotel'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import CheckIcon from '@material-ui/icons/Check'
import BathtubIcon from '@material-ui/icons/Bathtub'
import LanguageIcon from '@material-ui/icons/Language'
import DescriptionIcon from '@material-ui/icons/Description'

import { cutoffSecondsFromTime } from './utils'

const useStyles = makeStyles((theme) => ({
  infoBox: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(2, 3),
    width: '600px',
    [theme.breakpoints.between('xs', 'md')]: {
      padding: theme.spacing(2),
      width: '500px',
    },
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
    },
    maxHeight: '100%',
    overflowY: 'auto',
  },
  infoBoxHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  infoBoxCloseIcon: {
    alignSelf: 'flex-start',
    marginLeft: theme.spacing(1),
  },
  infoBoxRowItem: {
    flexGrow: 1,
    flexBasis: '225px',
    padding: theme.spacing(0, 1),
    [theme.breakpoints.down('xs')]: {
      flexBasis: '250px',
      '&:not(:first-child)': {
        marginTop: theme.spacing(2),
      },
    },
  },
  infoBoxIconLabelledInfo: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  infoBoxIcon: {
    marginRight: theme.spacing(2),
    paddingTop: theme.spacing(0.25),
    alignSelf: 'flex-start',
  },
  infoBoxRow: {
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    margin: theme.spacing(2, 0),
  },
  infoBoxRowAlignItemsStart: {
    alignItems: 'flex-start',
  },
  infoBoxLanguages: {
    margin: 0,
    paddingLeft: theme.spacing(2.5),
  },
  infoBoxDescription: {
    '& a': {
      color: theme.palette.primary.main,
    },
    '& p': {
      margin: 0,
    },
    '& ul': {
      margin: 0,
      paddingLeft: theme.spacing(2.5),
    },
  },
  snackbarContent: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    minWidth: 'auto',
    maxWidth: '300px',
  },
  snackbarAnchor: {
    [theme.breakpoints.up('md')]: {
      bottom: theme.spacing(10.5),
    },
  },
}))

const DetailInformation = ({ shelter }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Paper elevation={0} className={classes.infoBox}>
      <div className={classes.infoBoxHeader}>
        <div>
          <Typography variant='h5'>{shelter.name}</Typography>
          <Typography variant='caption'>{shelter.institution.name}</Typography>
        </div>
      </div>

      <div className={classes.infoBoxRow}>
        <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxRowItem}`}>
          <PlaceIcon className={classes.infoBoxIcon}/>
          <div>
            <Typography>{shelter.address.street}</Typography>
            <Typography>{shelter.address.plz} {shelter.address.city}</Typography>
          </div>
        </div>
        {
          (shelter.phone.mobile || shelter.phone.home) &&
          <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxRowItem}`}>
            <PhoneIcon className={classes.infoBoxIcon}/>
            <div>
              <Typography>{shelter.phone.home}</Typography>
              <Typography>{shelter.phone.mobile}</Typography>
            </div>
          </div>
        }
      </div>

      <div className={classes.infoBoxRow}>
        <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxRowItem}`}>
          <HotelIcon className={classes.infoBoxIcon}/>
          <div>
            <Typography variant='subtitle1'>{t('free_beds')}:</Typography>
            {shelter.beds.map((bedType, key) =>
              <Typography variant='body1'
                          key={key}>{t(bedType.target_group)} : {bedType.num_free_beds}</Typography>,
            )}
          </div>
        </div>
      </div>

      <div className={`${classes.infoBoxRow} ${classes.infoBoxRowAlignItemsStart}`}>
        <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxRowItem}`}>
          <AccessTimeIcon className={classes.infoBoxIcon}/>
          <div>
            <Typography variant='subtitle1'>{t('intake_hours')}:</Typography>
            <Typography variant='body1'>
              {cutoffSecondsFromTime(shelter.intake_hours.from)} - {cutoffSecondsFromTime(shelter.intake_hours.to)}
            </Typography>
          </div>
        </div>
        <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxRowItem}`}>
          <AccessTimeIcon className={classes.infoBoxIcon}/>
          <div>
            <Typography variant='subtitle1'>{t('opening_hours')}:</Typography>
            <Typography variant='body1'>
              {cutoffSecondsFromTime(shelter.opening_hours.from)} - {cutoffSecondsFromTime(shelter.opening_hours.to)}
            </Typography>
          </div>
        </div>
      </div>

      <div className={`${classes.infoBoxRow} ${classes.infoBoxRowAlignItemsStart}`}>
        <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxRowItem}`}>
          <AccountBalanceIcon className={classes.infoBoxIcon}/>
          <div>
            <Typography variant='subtitle1'>{t('rules')}:</Typography>
            <div className={classes.infoBoxIconLabelledInfo}>
              {shelter.rules.animals ? <CheckIcon className={classes.infoBoxIcon}/> :
                <CloseIcon className={classes.infoBoxIcon}/>}
              <Typography variant='body1'>{t('animals')}</Typography>
            </div>
            <div className={classes.infoBoxIconLabelledInfo}>
              {shelter.rules.families_welcome ? <CheckIcon className={classes.infoBoxIcon}/> :
                <CloseIcon className={classes.infoBoxIcon}/>}
              <Typography variant='body1'>{t('families_welcome')}</Typography>
            </div>
            <div className={classes.infoBoxIconLabelledInfo}>
              {shelter.rules.female_only ? <CheckIcon className={classes.infoBoxIcon}/> :
                <CloseIcon className={classes.infoBoxIcon}/>}
              <Typography variant='body1'>{t('female_only')}</Typography>
            </div>
            <div className={classes.infoBoxIconLabelledInfo}>
              {shelter.rules.kids_welcome ? <CheckIcon className={classes.infoBoxIcon}/> :
                <CloseIcon className={classes.infoBoxIcon}/>}
              <Typography variant='body1'>{t('kids')}</Typography>
            </div>
            <div className={classes.infoBoxIconLabelledInfo}>
              {shelter.rules.male_only ? <CheckIcon className={classes.infoBoxIcon}/> :
                <CloseIcon className={classes.infoBoxIcon}/>}
              <Typography variant='body1'>{t('male_only')}</Typography>
            </div>
            <div className={classes.infoBoxIconLabelledInfo}>
              {shelter.rules.shelter_seeking_person_intoxicated ?
                <CheckIcon className={classes.infoBoxIcon}/> : <CloseIcon className={classes.infoBoxIcon}/>}
              <Typography variant='body1'>{t('intoxicated')}</Typography>
            </div>
          </div>
        </div>
        <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxRowItem}`}>
          <BathtubIcon className={classes.infoBoxIcon}/>
          <div>
            <Typography variant='subtitle1'>{t('sanitary_amenities')}:</Typography>
            <div className={classes.infoBoxIconLabelledInfo}>
              {shelter.sanitary_amenities.wc ? <CheckIcon className={classes.infoBoxIcon}/> :
                <CloseIcon className={classes.infoBoxIcon}/>}
              <Typography variant='body1'>{t('wc')}</Typography>
            </div>
            <div className={classes.infoBoxIconLabelledInfo}>
              {shelter.sanitary_amenities.shower ? <CheckIcon className={classes.infoBoxIcon}/> :
                <CloseIcon className={classes.infoBoxIcon}/>}
              <Typography variant='body1'>{t('shower')}</Typography>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.infoBoxRow}>
        <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxRowItem}`}>
          <LanguageIcon className={classes.infoBoxIcon}/>
          <div>
            <Typography variant='subtitle1'>{t('languages')}:</Typography>
            <ul className={classes.infoBoxLanguages}>
              {shelter.spoken_languages.map((language, key) =>
                <Typography component='li' key={key} variant='body1'>{language.translated}</Typography>,
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className={classes.infoBoxRow}>
        <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxRowItem}`}>
          <DescriptionIcon className={classes.infoBoxIcon}/>
          <div>
            <Typography variant='subtitle1'>{t('description')}:</Typography>
            <Typography variant='body1' className={classes.infoBoxDescription}
                        dangerouslySetInnerHTML={{ __html: shelter.description }}/>
          </div>
        </div>
      </div>
    </Paper>
  )
}

export default DetailInformation
