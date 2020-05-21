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
    maxWidth: '600px',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      maxWidth: '100%',
    },
    maxHeight: '100%',
    overflowY: 'auto',
  },
  infoBoxHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoBoxItemAlignSelfCenter: {
    alignSelf: 'center',
  },
  infoBoxItemGrow: {
    flexGrow: 1,
  },
  infoBoxIconLabelledInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  infoBoxRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}))

export default function MapPage() {
  const classes = useStyles()
  const { t } = useTranslation()

  const [shelters, setShelters] = useState([])
  useEffect(() => {
    const getShelters = async () => {
      const response = await fetch(`http://130.149.22.44:8000/api/berlin/de-de/accommodations/`)
      const shelters = await response.json()
      console.log(shelters)
      setShelters(shelters)
    }
    getShelters()
  }, [])

  const [clickedShelter, setClickedShelter] = useState(null)

  const handleClickOnShelter = (shelter) => {
    setClickedShelter(shelter)
  }

  const [center, setCenter] = useState(DEFAULT_POSITION)
  const mapRef = useRef()
  useEffect(() => {
    const map = mapRef.current
    if (map) {
      map.leafletElement.locate({ watch: true, enableHighAccuracy: true })
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
          shelters.map((shelter, key) => (
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
      {
        clickedShelter !== null &&
        <div className={classes.infoBoxWrapper}>
          <Paper elevation={3} className={classes.infoBox}>

            <div className={classes.infoBoxHeader}>
              <Typography variant='h4'>{clickedShelter.name}</Typography>
              <IconButton className={classes.infoBoxItemAlignSelfCenter} onClick={handleCloseInfoBox}>
                <CloseIcon/>
              </IconButton>
            </div>
            <Typography variant='caption'>{clickedShelter.institution.name}</Typography>

            <div className={classes.infoBoxRow}>
              <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxItemGrow}`}>
                <PlaceIcon/>
                <div>
                  <Typography>{clickedShelter.address.street}</Typography>
                  <Typography>{clickedShelter.address.plz} {clickedShelter.address.city}</Typography>
                </div>
              </div>
              <div className={`${classes.infoBoxIconLabelledInfo} ${classes.infoBoxItemGrow}`}>
                <PhoneIcon/>
                <div>
                  <Typography>{clickedShelter.phone.home}</Typography>
                  <Typography>{clickedShelter.phone.mobile}</Typography>
                </div>
              </div>
            </div>
            <Typography variant='subtitle1'>{t('description')}:</Typography>
            <Typography variant='body1' dangerouslySetInnerHTML={{ __html: clickedShelter.description }}></Typography>

            <div style={{ padding: '0 5vh', maxWidth: '50vh' }}>


              <br/>
              <span style={{ display: 'block' }}><b>{t('free_beds')}:</b></span>
              {clickedShelter.beds.map((bed, i) =>
                <span key={i} style={{ display: 'block' }}>{t(bed.target_group)} : {bed.num_free_beds} </span>,
              )}
              <br/>
              <span style={{ display: 'block' }}><b>{t('intake_hours')}:</b></span>
              <span
                style={{ display: 'block' }}>{clickedShelter.opening_hours.from} - {clickedShelter.opening_hours.to}</span>
              <br/>
              <span style={{ display: 'block' }}><b>{t('opening_hours')}:</b></span>
              <span
                style={{ display: 'block' }}>{clickedShelter.opening_hours.from} - {clickedShelter.opening_hours.to}</span>
              <br/>
              <span style={{ display: 'block' }}><b>{t('rules')}:</b></span>
              <span
                style={{ display: 'block' }}>{t('kids')}: {clickedShelter.rules.kids_welcome ? t('yes') : t('no')}</span>
              <span
                style={{ display: 'block' }}>{t('animals')}: {clickedShelter.rules.animals ? t('yes') : t('no')}</span>
              <span
                style={{ display: 'block' }}>{t('female_only')}: {clickedShelter.rules.female_only ? t('yes') : t('no')}</span>
              <span
                style={{ display: 'block' }}>{t('families_welcome')}: {clickedShelter.rules.families_welcome ? t('yes') : t('no')}</span>
              <span
                style={{ display: 'block' }}>{t('male_only')}: {clickedShelter.rules.male_only ? t('yes') : t('no')}</span>
              <br/>
              <span style={{ display: 'block' }}>{t('sanitary_amenities')}: </span>
              <span
                style={{ display: 'block' }}>{t('wc')}: {clickedShelter.sanitary_amenities.wc ? t('yes') : t('no')}</span>
              <span
                style={{ display: 'block' }}>{t('shower')}: {clickedShelter.sanitary_amenities.shower ? t('yes') : t('no')}</span>
              <br/>
              <span style={{ display: 'block' }}><b>{t('languages')}:</b></span>
              {clickedShelter.spoken_languages.map((language, i) =>
                <span key={i} style={{ display: 'block' }}>{language.native}</span>,
              )}
            </div>
          </Paper>
        </div>
      }
    </div>
  )
}


