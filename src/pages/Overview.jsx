import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import {
  makeStyles,
  fade,
  InputBase,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Tooltip,
  IconButton
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import FilterListIcon from '@material-ui/icons/FilterList'

import { connect } from 'unistore/react'

import Divider from '../components/theme/Divider'
import ContentLimiter from '../components/theme/ContentLimiter'
import PageHeadline from '../components/theme/PageHeadline'
import ServerError from '../components/serverError/serverError'

import ShelterTable from '../components/shelterOverview/ShelterTable'

import { storeKeys } from '../store/store'
import { loadShelters } from '../store/actions'
import { resetRequest } from '../store/loadData'

import { filterShelters } from '../components/shelterOverview/utils'

const useStyles = makeStyles((theme) => ({
  searchWrapper:  {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing(4, 'auto'),
    alignItems: 'center',
    width: 'max-content'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    maxWidth: '290px',
    width: '100%',
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      maxWidth: '250px'
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  checkboxes: {
    marginLeft: theme.spacing(1)
  },
  thin: {
    fontWeight: 300
  },
  filterHeadline: {
    margin: theme.spacing(2, 0)
  }
}))

const Overview = props => {
  const { shelters, language, loadShelters } = props

  const classes = useStyles()
  const { t } = useTranslation()

  const [searchValue, setSearchValue] = useState('')

  // rules
  const rules = [
    {
      id: 'children',
      label: t('overview.filter.rules.children'),
      pathInData: ['rules', 'kids_welcome'] },
    {
      id: 'pets',
      label: t('overview.filter.rules.pets'),
      pathInData: ['rules', 'animals'] },
    {
      id: 'women',
      label: t('overview.filter.rules.women'),
      pathInData: ['rules', 'female_only'] },
    {
      id: 'men',
      label: t('overview.filter.rules.men'),
      pathInData: ['rules', 'male_only'] },
    {
      id: 'families',
      label: t('overview.filter.rules.families'),
      pathInData: ['rules', 'families_welcome'] },
    {
      id: 'intoxicated',
      label: t('overview.filter.rules.intoxicated'),
      pathInData: ['rules', 'shelter_seeking_person_intoxicated '] },

  ]
  const initialRuleFilters = {}
  rules.forEach(rule => initialRuleFilters[rule.id] = false)
  const [ruleFilters, setRuleFilters] = useState(initialRuleFilters)

  const handleRuleFilterChange = event => {
    setRuleFilters({ ...ruleFilters, [event.target.name]: event.target.checked });
  }

  const amenities = [
    {
      id: 'toilet',
      label: t('overview.filter.amenities.toilet'),
      pathInData: ['sanitary_amenities', 'wc'] },
    {
      id: 'shower',
      label: t('overview.filter.amenities.shower'),
      pathInData: ['sanitary_amenities', 'shower'] },
  ]
  const initialAmenityFilters = {}
  amenities.forEach(amenity => initialAmenityFilters[amenity.id] = false)
  const [amenityFilters, setAmenityFilters] = useState(initialAmenityFilters)

  const handleAmenityFilterChange = event => {
    setAmenityFilters({ ...amenityFilters, [event.target.name]: event.target.checked });
  }

  useEffect(() => {
    loadShelters()
  }, [loadShelters, language])

  useEffect(() => {
    return () =>  resetRequest(storeKeys.shelters)
  }, [])

  const [showFilters, setShowFilters] = useState(false)
  const toggleShowFilters = () => {
    setShowFilters(!showFilters)
  }

  if (shelters.loadingError) return (
    <ContentLimiter withBoxShadow>
      <ServerError />
    </ContentLimiter>
  )

  if (!shelters.data) return null

  const filteredShelters = filterShelters(shelters.data, searchValue, rules, ruleFilters, amenities, amenityFilters)

  return (
    <ContentLimiter withBoxShadow>
      <PageHeadline>{t('overview.pageHeadline')}</PageHeadline>

      <div className={classes.searchWrapper}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>

          <InputBase
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder={t('overview.searchPlaceholder')}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>

        <Tooltip className={classes.filterButton} title="Filter list">
          <IconButton onClick={e => toggleShowFilters()} aria-label="filter list">
            { showFilters ?
              <FilterListIcon color='primary' />
              : <FilterListIcon />
            }
          </IconButton>
        </Tooltip>
      </div>

      {showFilters &&
        <>
          <Divider thickness={1} maxWidth={100} marginSize="small" />

          <Typography
            className={`${classes.filterHeadline}`}
            variant="h5"
            component="h2">
              Filter
          </Typography>

          <Box ml={1}>
            <Typography className={classes.thin} variant="h6" component="h3">
              {t('overview.filter.rules.title')}
            </Typography>
            <FormGroup row className={classes.checkboxes}>
              { rules.map(rule => {
                return (
                  <FormControlLabel
                  key={rule.id}
                    control={
                      <Checkbox
                        checked={ruleFilters[rule.id]}
                        onChange={handleRuleFilterChange}
                        name={rule.id}
                        color="primary"
                        />
                      }
                      label={rule.label}
                      />
                      )
                    })}
            </FormGroup>

            <Typography className={classes.thin} variant="h6" component="h3">
              {t('overview.filter.amenities.title')}
            </Typography>
            <FormGroup row className={classes.checkboxes}>
              { amenities.map(amenity => {
                return (
                  <FormControlLabel
                  key={amenity.id}
                  control={
                    <Checkbox
                    checked={amenityFilters[amenity.id]}
                    onChange={handleAmenityFilterChange}
                    name={amenity.id}
                    color="primary"
                    />
                  }
                  label={amenity.label}
                  />
                  )
                })}
            </FormGroup>
          </Box >

          <Divider thickness={1} maxWidth={100} marginSize="small" />
        </>
      }

      <ShelterTable
        shelters={filteredShelters}
      />
    </ContentLimiter>
  )
}

const mapStateToProps = [storeKeys.shelters, storeKeys.language]
const actions = {
  loadShelters
}

export default connect(mapStateToProps, actions)(Overview)
