import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Select from '@material-ui/core/Select'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { makeStyles } from '@material-ui/core'

import deFlag from '../../../assets/images/flags/de.svg'
import enFlag from '../../../assets/images/flags/en.svg'
import frFlag from '../../../assets/images/flags/fr.svg'

const DEFAULT_LANGUAGE = { id: 'en', label: 'English', flag: enFlag }
const SELECTABLE_LANGUAGES = [
  { id: 'de', label: 'Deutsch', flag: deFlag },
  DEFAULT_LANGUAGE,
  { id: 'fr', label: 'Français', flag: frFlag },
]
const LANGUAGE_LOCAL_STORAGE_KEY = 'language'

const useStyles = makeStyles({
  selectedLanguage: {
    padding: '0 4px 0 8px',
  },
})

export default function LanguagePicker(props) {
  const classes = useStyles()

  useEffect(() => {
    const languageId = localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) ?? 'en'
    const languageOption = SELECTABLE_LANGUAGES.find((option) => option.id === languageId) ?? DEFAULT_LANGUAGE
    if (languageOption.id !== DEFAULT_LANGUAGE.id) {
      setLanguage(languageOption)
    }
  }, [])

  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE)
  useEffect(() => {
    const changeLanguage = async () => {
      try {
        await i18n.init()
        await i18n.changeLanguage(language.id)
      } catch (error) {
        //TODO handle error
        console.log(error)
      }
    }
    changeLanguage()
  }, [i18n, language.id])

  const handleValueChange = (event) => {
    const languageOption = event.target.value
    setLanguage(languageOption)
    localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, languageOption.id)
  }

  const renderSelectedValue = (value) => {
    return <img className={classes.selectedLanguage}
                alt={`flag of ${value.label}`}
                src={value.flag} height="24px"/>
  }

  return (
    <Select value={language}
            renderValue={renderSelectedValue}
            onChange={handleValueChange}
            {...props}>
      {SELECTABLE_LANGUAGES.map((option, key) =>
        <ListItem value={option} key={key} button={true}>
          <ListItemIcon>
            <img src={option.flag} alt={`flag of ${option.label}`} height="24px"/>
          </ListItemIcon>
          <ListItemText primary={option.label}/>
        </ListItem>,
      )}
    </Select>
  )
}
