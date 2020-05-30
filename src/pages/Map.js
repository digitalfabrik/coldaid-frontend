import React, { useEffect, useRef, useState } from 'react'
import { Map, Marker, TileLayer, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import userMarker from '../assets/images/userMarker.png'
import houseIcon from '../assets/images/marker.png'
import houseGrayIcon from '../assets/images/marker_gray.png'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Control from 'react-leaflet-control'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { useTranslation } from 'react-i18next'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { Hidden } from '@material-ui/core'
import PlaceIcon from '@material-ui/icons/Place'
import PhoneIcon from '@material-ui/icons/Phone'
import HotelIcon from '@material-ui/icons/Hotel'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import CheckIcon from '@material-ui/icons/Check'
import BathtubIcon from '@material-ui/icons/Bathtub'
import LanguageIcon from '@material-ui/icons/Language'
import DescriptionIcon from '@material-ui/icons/Description'
import { createResetErrorState, loadShelters } from '../store/actions'
import { connect } from 'unistore/react'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'

const POSITION_ICON = L.icon({
  iconUrl: userMarker,
  iconSize: [50, 50],
})

const HOUSE_ICON = L.icon({
  iconUrl: houseIcon,
  iconSize: [50, 50],
})

const HOUSE_GRAY_ICON = L.icon({
  iconUrl: houseGrayIcon,
  iconSize: [50, 50],
})

const DEFAULT_POSITION = { lat: 52.520008, lng: 13.404954 }

const useStyles = makeStyles((theme) => ({
  wrapper: {
    flexGrow: 1,
    position: 'relative',
    display: 'flex',
  },
  map: {
    flexGrow: 1,
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
  },
  controlTop: {
    margin: theme.spacing(0, 0, 0.5, 0),
  },
  controlCenter: {
    margin: theme.spacing(0.5, 0),
  },
  controlBottom: {
    margin: theme.spacing(0.5, 0, 0, 0),
  },
  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.8) !important',
    borderWidth: '2px !important',
    borderStyle: 'solid !important',
    borderColor: `${theme.palette.primary.main} !important`,
    color: '#fff !important',
    padding: `${theme.spacing(1)}px !important`,
    maxWidth: '350px',
    overflow: 'hidden',
  },
  infoBoxWrapper: {
    position: 'absolute',
    zIndex: 1001,
    padding: theme.spacing(2),
    top: 0,
    left: 0,
    height: '100%',
  },
  infoBox: {
    backgroundColor: '#ffffff',
    borderRadius: '3px',
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
  },
  snackbarAnchor: {
    [theme.breakpoints.up('md')]: {
      bottom: theme.spacing(10.5),
    },
  },
}))

function MapPage(props) {
  const { shelters, language, loadShelters, resetErrorState } = props

  const classes = useStyles()
  const { t } = useTranslation()

  useEffect(() => {
    loadShelters()
  }, [loadShelters, language])

  useEffect(() => {
    return () => {
      resetErrorState()
    }
  }, [resetErrorState])

  const [clickedShelter, setClickedShelter] = useState(null)
  useEffect(() => {
    setClickedShelter(null)
  }, [language])

  const handleClickOnShelter = (shelter) => {
    setClickedShelter(shelter)
  }

  const [center, setCenter] = useState(DEFAULT_POSITION)
  const mapRef = useRef()
  useEffect(() => {
    const map = mapRef.current
    if (map) {
      map.leafletElement.locate({ watch: true, enableHighAccuracy: true })
      map.leafletElement.on('locationerror', handleLocationError)
    }
  }, [mapRef])

  const handleLocationFound = (event) => {
    const latLng = event.latlng
    setCenter(latLng)
  }

  const handleZoomIn = () => {
    const map = mapRef.current
    if (map) {
      map.leafletElement.zoomIn()
    }
  }

  const handleZoomOut = () => {
    const map = mapRef.current
    if (map) {
      map.leafletElement.zoomOut()
    }
  }

  const handleLocate = () => {
    mapRef.current.leafletElement.flyTo(center)
  }

  const getNumberOfAvailableBeds = (shelter) => {
    return shelter.beds.reduce((acc, cur) => acc + cur.num_free_beds, 0)
  }

  const areBedsAvailable = (shelter) => {
    return getNumberOfAvailableBeds(shelter) > 0
  }

  const timeToString = (time) => {
    return time.slice(0, time.lastIndexOf(':'))
  }

  const handleCloseInfoBox = (event) => {
    event.stopPropagation()
    setClickedShelter(null)
  }

  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false)
  const handleLocationError = () => {
    setOpenErrorSnackbar(true)
  }
  const handleCloseLocationError = (event, reason) => {
    setOpenErrorSnackbar(false)
  }

  return (
    <div className={classes.wrapper}>
      <Map center={center}
           zoom={13}
           zoomControl={false}
           animate={true}
           className={classes.map}
           onLocationfound={handleLocationFound}
           ref={mapRef}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Control position="bottomright" className={classes.controls}>
          <Fab color="secondary" size="small" className={classes.controlTop} onClick={handleZoomIn}>
            <AddIcon/>
          </Fab>
          <Fab color="secondary" size="small" className={classes.controlCenter} onClick={handleZoomOut}>
            <RemoveIcon/>
          </Fab>
          <Fab color="secondary" size="small" className={classes.controlBottom} onClick={handleLocate}>
            <LocationOnIcon/>
          </Fab>
        </Control>
        {center !== DEFAULT_POSITION && <Marker position={center} icon={POSITION_ICON}/>}
        {
          shelters.data.map((shelter, key) => (
            <Marker key={key}
                    position={[shelter.address.geo.lat, shelter.address.geo.long]}
                    icon={areBedsAvailable(shelter) ? HOUSE_ICON : HOUSE_GRAY_ICON}
                    onclick={() => handleClickOnShelter(shelter)}>
              <Hidden smDown>
                <Tooltip direction='center' offset={[0, 75]} permanent={false} className={classes.tooltip}>
                  <Typography
                    variant="h6">{shelter.name.length > 32 ? `${shelter.name.slice(0, 32)}...` : shelter.name}</Typography>
                  <Typography
                    variant="subtitle2">{t('intake_hours')}: {timeToString(shelter.opening_hours.from)} - {timeToString(shelter.opening_hours.to)}</Typography>
                  <Typography
                    variant="subtitle2">{t('available_beds')}: {getNumberOfAvailableBeds(shelter)}</Typography>
                </Tooltip>
              </Hidden>
            </Marker>
          ))
        }
      </Map>
      {openErrorSnackbar &&
      <Snackbar style={{ zIndex: 1000 }}
                classes={{ anchorOriginBottomCenter: classes.snackbarAnchor }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                open={openErrorSnackbar}
                onClose={handleCloseLocationError}
                autoHideDuration={5000}
      ><SnackbarContent classes={{ root: classes.snackbarContent }} message={t('map.locationError')}/>
      </Snackbar>}
      {
        clickedShelter !== null &&
        <div className={classes.infoBoxWrapper}>
          <Paper elevation={3} className={classes.infoBox}>

            <div className={classes.infoBoxHeader}>
              <div>
                <Typography variant='h5'>{clickedShelter.name}</Typography>
                <Typography variant='caption'>{clickedShelter.institution.name}</Typography>
              </div>
              <IconButton className={classes.infoBoxCloseIcon} onClick={handleCloseInfoBox}>
                <CloseIcon/>
              </IconButton>
            </div>

            <div className={classes.infoBoxRow}>
              <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxRowItem}`}>
                <PlaceIcon className={classes.infoBoxIcon}/>
                <div>
                  <Typography>{clickedShelter.address.street}</Typography>
                  <Typography>{clickedShelter.address.plz} {clickedShelter.address.city}</Typography>
                </div>
              </div>
              {
                (clickedShelter.phone.mobile || clickedShelter.phone.home) &&
                <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxRowItem}`}>
                  <PhoneIcon className={classes.infoBoxIcon}/>
                  <div>
                    <Typography>{clickedShelter.phone.home}</Typography>
                    <Typography>{clickedShelter.phone.mobile}</Typography>
                  </div>
                </div>
              }
            </div>

            <div className={classes.infoBoxRow}>
              <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxRowItem}`}>
                <HotelIcon className={classes.infoBoxIcon}/>
                <div>
                  <Typography variant='subtitle1'>{t('free_beds')}:</Typography>
                  {clickedShelter.beds.map((bedType, key) =>
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
                    {timeToString(clickedShelter.intake_hours.from)} - {timeToString(clickedShelter.intake_hours.to)}
                  </Typography>
                </div>
              </div>
              <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxRowItem}`}>
                <AccessTimeIcon className={classes.infoBoxIcon}/>
                <div>
                  <Typography variant='subtitle1'>{t('opening_hours')}:</Typography>
                  <Typography variant='body1'>
                    {timeToString(clickedShelter.opening_hours.from)} - {timeToString(clickedShelter.opening_hours.to)}
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
                    {clickedShelter.rules.animals ? <CheckIcon className={classes.infoBoxIcon}/> :
                      <CloseIcon className={classes.infoBoxIcon}/>}
                    <Typography variant='body1'>{t('animals')}</Typography>
                  </div>
                  <div className={classes.infoBoxIconLabelledInfo}>
                    {clickedShelter.rules.families_welcome ? <CheckIcon className={classes.infoBoxIcon}/> :
                      <CloseIcon className={classes.infoBoxIcon}/>}
                    <Typography variant='body1'>{t('families_welcome')}</Typography>
                  </div>
                  <div className={classes.infoBoxIconLabelledInfo}>
                    {clickedShelter.rules.female_only ? <CheckIcon className={classes.infoBoxIcon}/> :
                      <CloseIcon className={classes.infoBoxIcon}/>}
                    <Typography variant='body1'>{t('female_only')}</Typography>
                  </div>
                  <div className={classes.infoBoxIconLabelledInfo}>
                    {clickedShelter.rules.kids_welcome ? <CheckIcon className={classes.infoBoxIcon}/> :
                      <CloseIcon className={classes.infoBoxIcon}/>}
                    <Typography variant='body1'>{t('kids')}</Typography>
                  </div>
                  <div className={classes.infoBoxIconLabelledInfo}>
                    {clickedShelter.rules.male_only ? <CheckIcon className={classes.infoBoxIcon}/> :
                      <CloseIcon className={classes.infoBoxIcon}/>}
                    <Typography variant='body1'>{t('male_only')}</Typography>
                  </div>
                  <div className={classes.infoBoxIconLabelledInfo}>
                    {clickedShelter.rules.shelter_seeking_person_intoxicated ?
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
                    {clickedShelter.sanitary_amenities.wc ? <CheckIcon className={classes.infoBoxIcon}/> :
                      <CloseIcon className={classes.infoBoxIcon}/>}
                    <Typography variant='body1'>{t('wc')}</Typography>
                  </div>
                  <div className={classes.infoBoxIconLabelledInfo}>
                    {clickedShelter.sanitary_amenities.shower ? <CheckIcon className={classes.infoBoxIcon}/> :
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
                    {clickedShelter.spoken_languages.map((language, key) =>
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
                              dangerouslySetInnerHTML={{ __html: clickedShelter.description }}/>
                </div>
              </div>
            </div>
          </Paper>
        </div>
      }
    </div>
  )
}

const mapStateToProps = ['shelters', 'language']
const actions = {
  loadShelters,
  resetErrorState: createResetErrorState('shelters')
}

export default connect(mapStateToProps, actions)(MapPage)
