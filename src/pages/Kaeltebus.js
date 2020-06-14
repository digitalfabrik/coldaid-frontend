import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'

import ContentLimiter from '../components/theme/ContentLimiter'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import { useTranslation } from 'react-i18next'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import ListItemText from '@material-ui/core/ListItemText'
import { storeKeys } from '../store/store'
import { requestKaeltebus } from '../store/actions'
import { connect } from 'unistore/react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import PageHeadline from '../components/theme/PageHeadline'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontWeight: '300',
    paddingBottom: theme.spacing(4),
  },
  header: {
    fontWeight: '100',
    [theme.breakpoints.down('sm')]: {
      fontWeight: '300',
    },
  },
  subHeader: {
    fontWeight: '300',
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    position: 'relative',
    '&::before': {
      content: '" "',
      position: 'absolute',
      marginLeft: theme.spacing(-2),
      width: theme.spacing(1),
      height: '100%',
      background: theme.palette.primary.main,
    },
  },
  row: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  rowItem: {
    flexBasis: '400px',
    '&:first-child': {
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      flexBasis: '244px',
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '100%',
      '&:first-child': {
        marginRight: 0,
      },
      '&:not(:first-child)': {
        marginTop: theme.spacing(1),
      },
    },
  },
  checkboxRowItem: {
    marginRight: 0,
    flexBasis: '400px',
    '&:first-child': {
      marginRight: theme.spacing(2),
    },
    '&:not(:first-child)': {
      paddingLeft: '11px',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      flexBasis: '244px',
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '100%',
      '&:first-child': {
        marginRight: 0,
      },
      '&:not(:first-child)': {
        marginTop: theme.spacing(1),
        paddingLeft: 0,
      },
    },
  },
  confirmationRowItem: {
    marginRight: 0,
    flexBasis: '827px',
    [theme.breakpoints.between('xs', 'sm')]: {
      flexBasis: '515px',
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '100%',
    },
  },
  selectOption: {
    padding: `0 ${theme.spacing(1)}px`,
  },
  question: {
    fontWeight: '300',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(-2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  submitButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(4),
    width: '832px',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '520px',
    },
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100% - 8px)',
    },
  },
}))


function Kaeltebus(props) {
  const { kaeltebus, requestKaeltebus } = props
  const classes = useStyles()
  const { t } = useTranslation()

  const [name, setName] = useState('')
  const handleNameChange = (event) => setName(event.target.value)
  const [gender, setGender] = useState('')
  const handleGenderChange = (event) => setGender(event.target.value)
  const [medicalCare, setMedicalCare] = useState(false)
  const handleMedicalCareChange = (event) => setMedicalCare(event.target.checked)
  const [wheelchairUser, setWheelchairUser] = useState(false)
  const handleWheelchairUserChange = (event) => setWheelchairUser(event.target.checked)

  const [address, setAddress] = useState('')
  const handleAddressChange = (event) => setAddress(event.target.value)
  const [zip, setZip] = useState('')
  const handleZipChange = (event) => setZip(event.target.value)

  const [warmingThings, setWarmingThings] = useState([])
  const handleWarmingThingsChange = (event) => setWarmingThings(event.target.value)
  const [numberOfBags, setNumberOfBags] = useState('')
  const handleNumberOfBagsChange = (event) => setNumberOfBags(event.target.value)

  const [numberOfOtherNeedyPeople, setNumberOfOtherNeedyPeople] = useState('')
  const handleNumberOfOtherNeedyPeopleChange = (event) => {
    const value = event.target.value
    if (value.length === 0 || value === '0') {
      setChildren(false)
    }
    setNumberOfOtherNeedyPeople(value)
  }
  const [children, setChildren] = useState(false)
  const handleChildrenChange = (event) => setChildren(event.target.checked)
  const [pets, setPets] = useState(false)
  const handlePetsChange = (event) => setPets(event.target.checked)

  const [nameRequestingPerson, setNameRequestingPerson] = useState('')
  const handleNameRequestingPersonChange = (event) => setNameRequestingPerson(event.target.value)
  const [phoneNumber, setPhoneNumber] = useState('')
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value)

  const [confirmation, setConfirmation] = useState(false)
  const handleConfirmation = (event) => setConfirmation(event.target.checked)

  const resetForm = () => {
    setName('')
    setGender('')
    setMedicalCare(false)
    setWheelchairUser(false)
    setAddress('')
    setZip('')
    setWarmingThings([])
    setNumberOfBags('')
    setNumberOfOtherNeedyPeople('')
    setChildren(false)
    setPets(false)
    setNameRequestingPerson('')
    setPhoneNumber('')
    setConfirmation(false)
  }

  useEffect(() => {
    if (kaeltebus.requestSuccess) {
      resetForm()
    }
  }, [kaeltebus])

  const warmingThingItems = {
    sleepingMat: {
      key: 'sleepingMat',
      label: t('kaeltebus.sleepingMatLabel'),
    },
    blanket: {
      key: 'blanket',
      label: t('kaeltebus.blanketLabel'),
    },
    jacket: {
      key: 'jacket',
      label: t('kaeltebus.jacketLabel'),
    },
    sleepingBag: {
      key: 'sleepingBag',
      label: t('kaeltebus.sleepingBagLabel'),
    },
  }

  const disableSubmitButton = () => {
    return name.length === 0 ||
      gender.length === 0 ||
      address.length === 0 ||
      zip.length === 0 ||
      numberOfBags.length === 0 ||
      nameRequestingPerson.length === 0 ||
      phoneNumber.length === 0 ||
      !confirmation
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      pinname: name,
      gender: gender,
      address: address,
      postcode: zip,
      medical_needs: medicalCare,
      wheelchair: wheelchairUser,
      iso_mat: warmingThings.includes(warmingThingItems.sleepingMat.key),
      blanket: warmingThings.includes(warmingThingItems.blanket.key),
      jacket: warmingThings.includes(warmingThingItems.jacket.key),
      sleeping_bag: warmingThings.includes(warmingThingItems.sleepingBag.key),
      luggage: numberOfBags,
      group: numberOfOtherNeedyPeople,
      children: children,
      pets: pets,
      helpername: nameRequestingPerson,
      phone: phoneNumber,
      latitude: 52.520008,
      longitude: 13.404954,
    }
    await requestKaeltebus(data)
  }

  return (
    <ContentLimiter withBoxShadow>
      <div className={classes.wrapper}>

        <PageHeadline>
          {t('kaeltebus.header')}
        </PageHeadline>

        <form onSubmit={handleSubmit} autoComplete="off">
          <Typography className={classes.subHeader} variant="h6">
            {t('kaeltebus.subheaderIndigentPerson')}
          </Typography>
          <div className={classes.row}>
            <FormControl className={classes.rowItem} required>
              <InputLabel htmlFor="name">{t('kaeltebus.nameLabel')}</InputLabel>
              <Input id="name" value={name} onChange={handleNameChange}/>
            </FormControl>
            <FormControl className={classes.rowItem} required>
              <InputLabel id="gender-label">{t('kaeltebus.genderLabel')}</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                value={gender}
                onChange={handleGenderChange}
              >
                <MenuItem value={'m'}>{t('kaeltebus.maleLabel')}</MenuItem>
                <MenuItem value={'w'}>{t('kaeltebus.femaleLabel')}</MenuItem>
                <MenuItem value={'x'}>{t('kaeltebus.diversLabel')}</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.row}>
            <FormControl className={classes.rowItem} required>
              <InputLabel htmlFor="address">{t('kaeltebus.addressLabel')}</InputLabel>
              <Input id="address" value={address} onChange={handleAddressChange}/>
            </FormControl>
            <FormControl className={classes.rowItem} required>
              <InputLabel htmlFor="zip">{t('kaeltebus.zipLabel')}</InputLabel>
              <Input id="zip" value={zip} onChange={handleZipChange}/>
            </FormControl>
          </div>
          <div className={classes.row}>
            <FormControlLabel className={classes.checkboxRowItem}
                              control={<Checkbox name="medicalCare" checked={medicalCare}
                                                 onChange={handleMedicalCareChange}
                                                 color={'primary'}/>}
                              label={t('kaeltebus.medicalCareLabel')}
            />
            <FormControlLabel className={classes.checkboxRowItem}
                              control={<Checkbox name="wheelchairUser" checked={wheelchairUser}
                                                 onChange={handleWheelchairUserChange}
                                                 color={'primary'}/>}
                              label={t('kaeltebus.wheelchairUserLabel')}
            />
          </div>

          <Typography className={classes.question} variant="subtitle1">
            {t('kaeltebus.warmingLabel')}
          </Typography>
          <div className={classes.row}>
            <FormControl className={classes.rowItem}>
              <InputLabel id="demo-mutiple-checkbox-label">{t('kaeltebus.warmingPlaceholder')}</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                multiple
                value={warmingThings}
                onChange={handleWarmingThingsChange}
                input={<Input/>}
                renderValue={(selected) => {
                  if (selected.length > 1) {
                    return `${warmingThingItems[selected[0]].label} +${selected.length - 1}`
                  } else {
                    return warmingThingItems[selected[0]].label
                  }
                }}
              >
                <MenuItem value={warmingThingItems.sleepingMat.key} className={classes.selectOption}>
                  <Checkbox checked={warmingThings.includes(warmingThingItems.sleepingMat.key)} color="primary"/>
                  <ListItemText primary={warmingThingItems.sleepingMat.label}/>
                </MenuItem>
                <MenuItem value={warmingThingItems.blanket.key} className={classes.selectOption}>
                  <Checkbox checked={warmingThings.includes(warmingThingItems.blanket.key)} color="primary"/>
                  <ListItemText primary={warmingThingItems.blanket.label}/>
                </MenuItem>
                <MenuItem value={warmingThingItems.jacket.key} className={classes.selectOption}>
                  <Checkbox checked={warmingThings.includes(warmingThingItems.jacket.key)} color="primary"/>
                  <ListItemText primary={warmingThingItems.jacket.label}/>
                </MenuItem>
                <MenuItem value={warmingThingItems.sleepingBag.key} className={classes.selectOption}>
                  <Checkbox checked={warmingThings.includes(warmingThingItems.sleepingBag.key)} color="primary"/>
                  <ListItemText primary={warmingThingItems.sleepingBag.label}/>
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          <Typography className={classes.question} variant="subtitle1">
            {t('kaeltebus.numberOfBagsLabel')}
          </Typography>
          <div className={classes.row}>
            <FormControl className={classes.rowItem} required>
              <InputLabel htmlFor="numberOfBags">{t('kaeltebus.numberOfBagsPlaceholder')}</InputLabel>
              <Input id="numberOfBags" value={numberOfBags} onChange={handleNumberOfBagsChange} type="number"
                     inputProps={{ min: '0' }}/>
            </FormControl>
          </div>

          <Typography className={classes.question} variant="subtitle1">
            {t('kaeltebus.numberOfOtherNeedyPeopleLabel')}
          </Typography>
          <div className={classes.row}>
            <FormControl className={classes.rowItem}>
              <InputLabel
                htmlFor="numberOfOtherNeedyPeople">{t('kaeltebus.numberOfOtherNeedyPeoplePlaceholder')}</InputLabel>
              <Input id="numberOfOtherNeedyPeople" value={numberOfOtherNeedyPeople}
                     onChange={handleNumberOfOtherNeedyPeopleChange} type="number" inputProps={{ min: '0' }}/>
            </FormControl>
            <FormControlLabel className={classes.checkboxRowItem} style={{ paddingLeft: 0 }}
                              control={<Checkbox name="children" checked={children} onChange={handleChildrenChange}
                                                 disabled={numberOfOtherNeedyPeople.length === 0 || numberOfOtherNeedyPeople === '0'}
                                                 color={'primary'}/>}
                              label={t('kaeltebus.childrenLabel')}
            />
          </div>
          <div className={classes.row}>
            <FormControlLabel className={classes.checkboxRowItem}
                              control={<Checkbox name="pets" checked={pets} onChange={handlePetsChange}
                                                 color={'primary'}/>}
                              label={t('kaeltebus.petsLabel')}
            />
          </div>

          <Typography className={classes.subHeader} variant="h6">
            {t('kaeltebus.subheaderRequestPerson')}
          </Typography>
          <div className={classes.row}>
            <FormControl className={classes.rowItem} required>
              <InputLabel htmlFor="nameRequestingPerson">{t('kaeltebus.nameRequestingPersonLabel')}</InputLabel>
              <Input id="nameRequestingPerson" value={nameRequestingPerson}
                     onChange={handleNameRequestingPersonChange}/>
            </FormControl>
            <FormControl className={classes.rowItem} required>
              <InputLabel htmlFor="phoneNumber">{t('kaeltebus.phoneNumberLabel')}</InputLabel>
              <Input id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange}/>
            </FormControl>
          </div>
          <div className={classes.row}>
            <FormControlLabel className={classes.confirmationRowItem}
                              control={<Checkbox name="confirmation" checked={confirmation}
                                                 onChange={handleConfirmation}
                                                 color={'primary'}/>}
                              label={t('kaeltebus.confirmLabel')}
            />
          </div>
          <div className={classes.submitButtonContainer}>
            <Button variant="contained" color="primary" type="submit"
                    disabled={disableSubmitButton() || kaeltebus.pendingRequestsId !== null}>
              {t('kaeltebus.submitButton')}
            </Button>
          </div>
        </form>
      </div>
    </ContentLimiter>
  )
}

const mapStateToProps = [storeKeys.kaeltebus]
const actions = {
  requestKaeltebus,
}

export default connect(mapStateToProps, actions)(Kaeltebus)
