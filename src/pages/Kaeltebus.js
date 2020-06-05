import React, { useState } from 'react'
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

export default function Kaeltebus() {
  const { t } = useTranslation()

  const [name, setName] = useState('')
  const handleNameChange = (event) => setName(event.target.value)
  const [gender, setGender] = useState('male')
  const handleGenderChange = (event) => setGender(event.target.value)
  const [address, setAddress] = useState('')
  const handleAddressChange = (event) => setAddress(event.target.value)
  const [zip, setZip] = useState('')
  const handleZipChange = (event) => setZip(event.target.value)
  const [medicalCare, setMedicalCare] = useState(false)
  const handleMedicalCareChange = (event) => setMedicalCare(event.target.checked)
  return (
    <ContentLimiter withBoxShadow>
      <Typography variant="h1">
        {t('kaeltebus.header')}
      </Typography>

      <form>
        <Typography variant="h2">
          {t('kaeltebus.subheaderIndigentPerson')}
        </Typography>
        <FormControl>
          <InputLabel htmlFor="name">{t('kaeltebus.nameLabel')}</InputLabel>
          <Input id="name" value={name} onChange={handleNameChange} autoComplete="off"/>
        </FormControl>
        <FormControl>
          <InputLabel id="gender-label">{t('kaeltebus.genderLabel')}</InputLabel>
          <Select
            labelId="gender-label"
            id="gender"
            value={gender}
            onChange={handleGenderChange}
          >
            <MenuItem value={'male'}>{t('kaeltebus.maleLabel')}</MenuItem>
            <MenuItem value={'female'}>{t('kaeltebus.femaleLabel')}</MenuItem>
            <MenuItem value={'divers'}>{t('kaeltebus.diversLabel')}</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="address">{t('kaeltebus.addressLabel')}</InputLabel>
          <Input id="address" value={address} onChange={handleAddressChange} autoComplete="off"/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="zip">{t('kaeltebus.zipLabel')}</InputLabel>
          <Input id="zip" value={zip} onChange={handleZipChange} autoComplete="off"/>
        </FormControl>
        <FormControlLabel
          control={<Checkbox name="medicalCare" checked={medicalCare} onChange={handleMedicalCareChange}
                             color={'primary'}/>}
          label={t('kaeltebus.medicalCareLabel')}
        />
        <Typography variant="h3">
          {t('kaeltebus.warmingLabel')}
        </Typography>
        <FormControlLabel
          control={<Checkbox name="sleepingMat" color={'primary'}/>}
          label={t('kaeltebus.sleepingMatLabel')}
        />
        <FormControlLabel
          control={<Checkbox name="blanket" color={'primary'}/>}
          label={t('kaeltebus.blanketLabel')}
        />
        <FormControlLabel
          control={<Checkbox name="jacket" color={'primary'}/>}
          label={t('kaeltebus.jacketLabel')}
        />
        <FormControlLabel
          control={<Checkbox name="sleepingBag" color={'primary'}/>}
          label={t('kaeltebus.sleepingBagLabel')}
        />

        <Typography variant="h3">
          {t('kaeltebus.otherInformationLabel')}
        </Typography>
        <FormControlLabel
          control={<Checkbox name="children" color={'primary'}/>}
          label={t('kaeltebus.childrenLabel')}
        />
        <FormControlLabel
          control={<Checkbox name="pets" color={'primary'}/>}
          label={t('kaeltebus.petsLabel')}
        />
        <FormControlLabel
          control={<Checkbox name="wheelchairUser" color={'primary'}/>}
          label={t('kaeltebus.wheelchairUserLabel')}
        />
        <FormControl>
          <InputLabel htmlFor="numberOfBags">{t('kaeltebus.numberOfBagsLabel')}</InputLabel>
          <Input id="numberOfBags" type="number" autoComplete="off"/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="numberOfOtherNeedyPeople">{t('kaeltebus.numberOfOtherNeedyPeopleLabel')}</InputLabel>
          <Input id="numberOfOtherNeedyPeople" type="number" autoComplete="off"/>
        </FormControl>


        <Typography variant="h2">
          {t('kaeltebus.subheaderRequestPerson')}
        </Typography>
        <FormControl>
          <InputLabel htmlFor="nameRequestingPerson">{t('kaeltebus.nameRequestingPersonLabel')}</InputLabel>
          <Input id="nameRequestingPerson" autoComplete="off"/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="phoneNumber">{t('kaeltebus.phoneNumberLabel')}</InputLabel>
          <Input id="phoneNumber" autoComplete="off"/>
        </FormControl>
        <Button variant="contained" color="primary">
          {t('kaeltebus.submitButton')}
        </Button>
      </form>
    </ContentLimiter>
  )
}
