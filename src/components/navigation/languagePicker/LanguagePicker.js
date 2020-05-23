import React, { Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles, withStyles } from '@material-ui/core'
import { connect } from 'unistore/react'

import deFlag from '../../../assets/images/flags/de.svg'
import enFlag from '../../../assets/images/flags/en.svg'
import frFlag from '../../../assets/images/flags/fr.svg'
import ruFlag from '../../../assets/images/flags/ru.svg'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import { setTestValue } from '../../../store/actions'
const DEFAULT_LANGUAGE = { code: 'en-gb', label: 'English', flag: enFlag }

const SELECTABLE_LANGUAGES = [
  { code: 'de-de', label: 'Deutsch', flag: deFlag },
  DEFAULT_LANGUAGE,
  { code: 'fr-fr', label: 'Français', flag: frFlag },
  { code: 'ru-ru', label: 'Russian', flag: ruFlag },
]
const LANGUAGE_LOCAL_STORAGE_KEY = 'language'

const StyledMenu = withStyles((theme) => ({
  paper: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 0,
    borderTopWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
}))(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))

const useStyles = makeStyles((theme) => ({
  flagIcon: {
    minWidth: theme.spacing(5),
  },
}))

function LanguagePicker(props) {
  const { testvalue, setTestValue } = props

  const classes = useStyles()
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE)

  useEffect(() => {
    const languageCode = localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) ?? 'en-gb'
    const languageOption = SELECTABLE_LANGUAGES.find((option) => option.code === languageCode) ?? DEFAULT_LANGUAGE
    if (languageOption.code !== DEFAULT_LANGUAGE.code) {
      setLanguage(languageOption)
    }
  }, [])

  useEffect(() => {
    const changeLanguage = async () => {
      try {
        await i18n.init()
        await i18n.changeLanguage(language.code)
      } catch (error) {
        //TODO handle error
        console.log(error)
      }
    }
    changeLanguage()
  }, [i18n, language.code])

  const [anchorLanguageSelection, setAnchorLanguageSelection] = useState(null)
  const handleClickOnLanguageSelection = (event) => {
    event.stopPropagation()
    setAnchorLanguageSelection(event.currentTarget)
  }
  const handleCloseLanguageSelection = () => {
    setAnchorLanguageSelection(null)
  }

  const handleClickOnLanguage = (languageOption) => {
    setLanguage(languageOption)
    handleCloseLanguageSelection()
    localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, languageOption.code)
  }

  return (
    <Fragment>
      <button onClick={() => setTestValue(testvalue + 1)}>TEST</button>
      <div>{testvalue}</div>
      <MenuItem component={'button'} color="inherit"
        onClick={handleClickOnLanguageSelection}
        {...props}>
        <img alt={`flag of ${language.label}`}
          src={language.flag} height="32px" />
      </MenuItem>
      <StyledMenu
        anchorEl={anchorLanguageSelection}
        keepMounted
        open={Boolean(anchorLanguageSelection)}
        onClose={handleCloseLanguageSelection}>
        {SELECTABLE_LANGUAGES.map((option, key) =>
          <MenuItem className={option.code === language.code ? 'Mui-selected' : ''}
            onClick={() => handleClickOnLanguage(option)}
            key={key}>
            <ListItemIcon className={classes.flagIcon}>
              <img src={option.flag} alt={`flag of ${option.label}`} height="24px" />
            </ListItemIcon>
            <ListItemText primary={option.label} />
          </MenuItem>,
        )}
      </StyledMenu>
    </Fragment>
  )
}

const mapStateToProps = ['testvalue'] // could be a function or an array
const actions = {
  setTestValue
}

export default connect(mapStateToProps, actions)(LanguagePicker)
