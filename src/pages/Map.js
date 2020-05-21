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
    backgroundColor: 'rgba(0,0,0,0.6) !important',
    borderWidth: '2px !important',
    borderStyle: 'solid !important',
    borderColor: `${theme.palette.primary.main} !important`,
    color: '#fff !important',
    padding: `${theme.spacing(1)}px !important`,
    maxWidth: '350px',
    overflow: 'hidden',
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

  return (
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
            <Tooltip direction='center' offset={[0, 75]} permanent={false} className={classes.tooltip}>
              <Typography
                variant="h6">{shelter.name.length > 32 ? `${shelter.name.slice(0, 32)}...` : shelter.name}</Typography>
              <Typography
                variant="subtitle2">{t('intake_hours')}: {timeToString(shelter.opening_hours.from)} - {timeToString(shelter.opening_hours.to)}</Typography>
              <Typography variant="subtitle2">{t('available_beds')}: {getNumberOfAvailableBeds(shelter)}</Typography>
            </Tooltip>
          </Marker>
        ))
      }
      {
        clickedShelter !== null &&
        <div style={{ position: 'absolute', zIndex: 450 }}>
          Hallo
        </div>
      }

    </Map>
  )
}

// class MapPage extends Component {
//   constructor(props) {
//     super(props)
//
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
//     this.selectedShelterToString = this.selectedShelterToString.bind(this)
//     this.getSumFreeBeds = this.getSumFreeBeds.bind(this)
//
//     this.state = {
//       shelters: [],
//       sidebarOpen: false,
//       selectedShelter: {},
//
//     }
//   }
//
//   async componentDidMount() {
//     let data = await FetchShelters()
//     this.setState({ shelters: data })
//   }
//
//   houseIcon = L.icon({
//     iconUrl: markerIcon,
//     iconSize: [50, 50],
//   })
//
//   houseIconGray = L.icon({
//     iconUrl: markerIconGray,
//     iconSize: [50, 50],
//   })
//
//   positionIcon = L.icon({
//     iconUrl: userMarker,
//     iconSize: [50, 50],
//   })
//
//   onSetSidebarOpen(open) {
//     this.setState({
//       sidebarOpen: open,
//     })
//   }
//
//   selectedShelterToString(t) {
//     this.t = t
//     let shelter = this.state.selectedShelter
//     if (Object.keys(shelter).length === 0) {
//       return (<b>empty</b>)
//     } else {
//       return (
//         <div style={{ padding: '0 5vh', maxWidth: '50vh' }}>
//           <h2 style={{ display: 'block' }}>{shelter.name}</h2>
//
//           <span style={{ display: 'block' }}><b>{t('address')}:</b></span>
//           <span style={{ display: 'block' }}>{shelter.address.street} {shelter.address.number}</span>
//           <span style={{ display: 'block' }}>{shelter.address.additional}</span>
//           <span style={{ display: 'block' }}>{shelter.address.plz} {shelter.address.city}</span>
//           <br/>
//           <span style={{ display: 'block' }}><b>{t('phone')}:</b></span>
//           <span style={{ display: 'block' }}>{shelter.phone.mobile}</span>
//           <span style={{ display: 'block' }}>{shelter.phone.home}</span>
//           <br/>
//           <span style={{ display: 'block' }}><b>{t('description')}:</b></span>
//           <span style={{ display: 'block' }} dangerouslySetInnerHTML={{ __html: shelter.description }}></span>
//           <br/>
//           <span style={{ display: 'block' }}><b>{t('free_beds')}:</b></span>
//           {shelter.beds.map((bed, i) =>
//             <span key={i} style={{ display: 'block' }}>{t(bed.target_group)} : {bed.num_free_beds} </span>,
//           )}
//           <br/>
//           <span style={{ display: 'block' }}><b>{t('intake_hours')}:</b></span>
//           <span style={{ display: 'block' }}>{shelter.opening_hours.from} - {shelter.opening_hours.to}</span>
//           <br/>
//           <span style={{ display: 'block' }}><b>{t('opening_hours')}:</b></span>
//           <span style={{ display: 'block' }}>{shelter.opening_hours.from} - {shelter.opening_hours.to}</span>
//           <br/>
//           <span style={{ display: 'block' }}><b>{t('rules')}:</b></span>
//           <span style={{ display: 'block' }}>{t('kids')}: {shelter.rules.kids_welcome ? t('yes') : t('no')}</span>
//           <span style={{ display: 'block' }}>{t('animals')}: {shelter.rules.animals ? t('yes') : t('no')}</span>
//           <span style={{ display: 'block' }}>{t('female_only')}: {shelter.rules.female_only ? t('yes') : t('no')}</span>
//           <span
//             style={{ display: 'block' }}>{t('families_welcome')}: {shelter.rules.families_welcome ? t('yes') : t('no')}</span>
//           <span style={{ display: 'block' }}>{t('male_only')}: {shelter.rules.male_only ? t('yes') : t('no')}</span>
//           <br/>
//           <span style={{ display: 'block' }}>{t('sanitary_amenities')}: </span>
//           <span style={{ display: 'block' }}>{t('wc')}: {shelter.sanitary_amenities.wc ? t('yes') : t('no')}</span>
//           <span
//             style={{ display: 'block' }}>{t('shower')}: {shelter.sanitary_amenities.shower ? t('yes') : t('no')}</span>
//           <br/>
//           <span style={{ display: 'block' }}><b>{t('holder')}:</b></span>
//           <span style={{ display: 'block' }}>{shelter.institution.name}</span>
//           <br/>
//           <span style={{ display: 'block' }}><b>{t('languages')}:</b></span>
//           {shelter.spoken_languages.map((language, i) =>
//             <span key={i} style={{ display: 'block' }}>{language.native}</span>,
//           )}
//         </div>
//       )
//     }
//   }
//
//   getToolTipInfo(shelter, t) {
//     this.t = t
//     return (
//       <Tooltip direction='center' offset={[0, 50]} opacity={1} permanent={false}>
//         <span>
//           {shelter.name}
//         </span> <br/>
//         <span>
//           {t('intake_hours')}: {shelter.opening_hours.from} - {shelter.opening_hours.to}
//         </span> <br/>
//         <span>
//           {t('beds')}: {this.getSumFreeBeds(shelter.beds)}
//         </span>
//       </Tooltip>
//     )
//   }
//
//   getSumFreeBeds(beds) {
//     let sumValue = 0
//     beds.map(
//       bedType => sumValue += bedType.num_free_beds,
//     )
//     return sumValue
//   }
//
//   render() {
//     const { t } = this.props
//     let position = [52.52, 13.4]
//     if (this.props.coords != null && this.props.isGeolocationAvailable && this.props.isGeolocationEnabled) {
//       position = [this.props.coords.latitude, this.props.coords.longitude]
//     }
//
//     return (
//       <div>
//         <Sidebar
//           sidebar={this.selectedShelterToString(t)}
//           open={this.state.sidebarOpen}
//           styles={{ sidebar: { background: 'white' } }}
//           onSetOpen={this.onSetSidebarOpen}
//         >
//           <Map center={position} zoom={12} style={{ height: '90vh', zIndex: '0' }}>
//             <ZoomControl position="bottomleft"></ZoomControl>
//             <TileLayer
//               attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={position} icon={this.positionIcon}/>
//             {
//               this.state.shelters.map((shelter, i) =>
//                 <Marker onClick={() => {
//                   this.onSetSidebarOpen(true)
//                   this.setState({ selectedShelter: shelter })
//                 }}
//                         key={i} position={[shelter.address.geo.lat, shelter.address.geo.long]}
//                         icon={this.getSumFreeBeds(shelter.beds) > 0 ? this.houseIcon : this.houseIconGray}>
//                   {this.getToolTipInfo(shelter, t)}
//                 </Marker>,
//               )
//             }
//             <Control position="bottomright" >
//               <button
//                 onClick={ () => this.setState({bounds: [51.3, 0.7]}) }
//               >
//                 Reset View
//               </button>
//             </Control>
//           </Map>
//           <div style={{ fontSize: '10px' }}>Icons made by <a href="https://www.flaticon.com/authors/freepik"
//                                                              title="Freepik">Freepik</a> <a
//             href="https://www.flaticon.com/authors/mavadee" title="mavadee">mavadee</a> from <a
//             href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//         </Sidebar>
//       </div>
//     )
//   }
// }
//
// export default pipe(withTranslation(), geolocated({
//   positionOptions: {
//     enableHighAccuracy: true,
//   },
//   userDecisionTimeout: 5000,
// }))(MapPage)



