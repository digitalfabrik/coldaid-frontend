import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import L from 'leaflet';
import { Map, TileLayer, Tooltip, Marker } from 'react-leaflet';
import FetchShelters from './shelterOverview/FetchShelters';
import markerIcon from "../assets/images/marker.png";
import markerIconGray from "../assets/images/marker_gray.png";
import userMarker from "../assets/images/userMarker.png";
import Sidebar from "react-sidebar";
import { geolocated } from "react-geolocated";
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet';
import pipe from 'lodash/fp/pipe';


class MapPage extends Component {
  constructor(props) {
    super(props);

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.selectedShelterToString = this.selectedShelterToString.bind(this);
    this.getSumFreeBeds = this.getSumFreeBeds.bind(this);

    this.state = {
      shelters: [],
      sidebarOpen: false,
      selectedShelter: {}

    }
  }

  async componentDidMount() {
    let data = await FetchShelters();
    this.setState({ shelters: data });
  }

  houseIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [50, 50]
  });

  houseIconGray = L.icon({
    iconUrl: markerIconGray,
    iconSize: [50, 50]
  });

  positionIcon = L.icon({
    iconUrl: userMarker,
    iconSize: [50, 50]
  });

  onSetSidebarOpen(open) {
    this.setState({
      sidebarOpen: open
    });
  }

  selectedShelterToString(t) {
    this.t = t;
    let shelter = this.state.selectedShelter;
    if (Object.keys(shelter).length === 0) {
      return (<b>empty</b>)
    }
    else {
      return (
        <div style={{ padding: "0 5vh", maxWidth: "50vh" }}>
          <h2 style={{ display: "block" }}>{shelter.name}</h2>

          <span style={{ display: "block" }}><b>{t('address')}:</b></span>
          <span style={{ display: "block" }}>{shelter.address.street} {shelter.address.number}</span>
          <span style={{ display: "block" }}>{shelter.address.additional}</span>
          <span style={{ display: "block" }}>{shelter.address.plz} {shelter.address.city}</span>
          <br />
          <span style={{ display: "block" }}><b>{t('phone')}:</b></span>
          <span style={{ display: "block" }}>{shelter.phone.mobile}</span>
          <span style={{ display: "block" }}>{shelter.phone.home}</span>
          <br />
          <span style={{ display: "block" }}><b>{t('description')}:</b></span>
          <span style={{ display: "block" }} dangerouslySetInnerHTML={{ __html: shelter.description }}></span>
          <br />
          <span style={{ display: "block" }}><b>{t('free_beds')}:</b></span>
          {shelter.beds.map((bed, i) =>
            <span key={i} style={{ display: "block" }}>{t(bed.target_group)} : {bed.num_free_beds} </span>
          )}
          <br />
          <span style={{ display: "block" }}><b>{t('intake_hours')}:</b></span>
          <span style={{ display: "block" }}>{shelter.opening_hours.from} - {shelter.opening_hours.to}</span>
          <br />
          <span style={{ display: "block" }}><b>{t('opening_hours')}:</b></span>
          <span style={{ display: "block" }}>{shelter.opening_hours.from} - {shelter.opening_hours.to}</span>
          <br />
          <span style={{ display: "block" }}><b>{t('rules')}:</b></span>
          <span style={{ display: "block" }}>{t('kids')}: {shelter.rules.kids_welcome ? t('yes') : t('no')}</span>
          <span style={{ display: "block" }}>{t('animals')}: {shelter.rules.animals ? t('yes') : t('no')}</span>
          <span style={{ display: "block" }}>{t('female_only')}: {shelter.rules.female_only ? t('yes') : t('no')}</span>
          <span style={{ display: "block" }}>{t('families_welcome')}: {shelter.rules.families_welcome ? t('yes') : t('no')}</span>
          <span style={{ display: "block" }}>{t('male_only')}: {shelter.rules.male_only ? t('yes') : t('no')}</span>
          <br />
          <span style={{ display: "block" }}>{t('sanitary_amenities')}: </span>
          <span style={{ display: "block" }}>{t('wc')}: {shelter.sanitary_amenities.wc ? t('yes') : t('no')}</span>
          <span style={{ display: "block" }}>{t('shower')}: {shelter.sanitary_amenities.shower ? t('yes') : t('no')}</span>
          <br />
          <span style={{ display: "block" }}><b>{t('holder')}:</b></span>
          <span style={{ display: "block" }}>{shelter.institution.name}</span>
          <br />
          <span style={{ display: "block" }}><b>{t('languages')}:</b></span>
          {shelter.spoken_languages.map((language, i) =>
            <span key={i} style={{ display: "block" }}>{language.native}</span>
          )}
        </div>
      );
    }
  }

  getToolTipInfo(shelter, t) {
    this.t = t;
    return (
      <Tooltip direction='center' offset={[0, 50]} opacity={1} permanent={false}>
        <span>
          {shelter.name}
        </span> <br />
        <span>
          {t('intake_hours')}: {shelter.opening_hours.from} - {shelter.opening_hours.to}
        </span> <br />
        <span>
          {t('beds')}: {this.getSumFreeBeds(shelter.beds)}
        </span>
      </Tooltip>
    );
  }

  getSumFreeBeds(beds) {
    let sumValue = 0;
    beds.map(
      bedType => sumValue += bedType.num_free_beds
    );
    return sumValue;
  }

  render() {
    const { t } = this.props;
    let position = [52.52, 13.4];
    if (this.props.coords != null && this.props.isGeolocationAvailable && this.props.isGeolocationEnabled) {
      position = [this.props.coords.latitude.toFixed(2), this.props.coords.longitude.toFixed(2)]
    }

    return (
      <div>
        <Sidebar
          sidebar={this.selectedShelterToString(t)}
          open={this.state.sidebarOpen}
          styles={{ sidebar: { background: "white" } }}
          onSetOpen={this.onSetSidebarOpen}
        >
          <Map center={position} zoom={12} style={{ height: "90vh", zIndex: "0" }} >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={this.positionIcon} />
            {
              this.state.shelters.map((shelter, i) =>
                <Marker onClick={() => { this.onSetSidebarOpen(true); this.setState({ selectedShelter: shelter }) }}
                  key={i} position={[shelter.address.geo.lat, shelter.address.geo.long]}
                  icon={this.getSumFreeBeds(shelter.beds) > 0 ? this.houseIcon : this.houseIconGray}>
                  {this.getToolTipInfo(shelter, t)}
                </Marker>
              )
            }
          </Map>
          <div style={{ fontSize: "10px" }}>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>  <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">mavadee</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </Sidebar>
      </div>
    );
  }
}

export default pipe(withTranslation(), geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
}))(MapPage);



