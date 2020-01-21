import React, {Component} from 'react';
import {usePosition} from '../components/usePosition';
import {useTranslation} from 'react-i18next';
import L from 'leaflet';
import { Map, Polygon, TileLayer, Tooltip, Marker, Popup } from 'react-leaflet'
import FetchShelters from '../components/FetchShelters'
import markerIcon from "../assets/images/marker.png"
import userMarker from "../assets/images/userMarker.png"
import Sidebar from "react-sidebar";


export default class MapPage extends Component {


    constructor(props) {
        super(props);

        const shelters = FetchShelters();
        //const {latitude, longitude, error} = usePosition();
        let position = [52.52, 13.4];
        /*if (latitude !== undefined && longitude !== undefined) {
            position = [latitude.toFixed(2), longitude.toFixed(2)]
        }*/
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.selectedShelterToString = this.selectedShelterToString.bind(this);

        this.state = {
            shelters: shelters,
            position: position,
            sidebarOpen: false,
            selectedShelter: {}

        }
    }


    houseIcon = L.icon({
        iconUrl: markerIcon,
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

    selectedShelterToString() {
        let shelter = this.state.selectedShelter;
        if (Object.keys(shelter).length === 0) {
            return (<b>empty</b>)
        }
        else {
            return (
                <div style={{ padding: "0 5vh"}}>
                    <h2 style={{display: "block"}}>{shelter.name}</h2>

                    <span style={{display: "block"}}><b>Address:</b></span>
                    <span style={{display: "block"}}>{shelter.address.street} {shelter.address.number}</span>
                    <span style={{display: "block"}}>{shelter.address.additional}</span>
                    <span style={{display: "block"}}>{shelter.address.plz} {shelter.address.city}</span>
                    <br/>
                    <span style={{display: "block"}}><b>Phone:</b></span>
                    <span style={{display: "block"}}>{shelter.phone.mobile}</span>
                    <span style={{display: "block"}}>{shelter.phone.home}</span>
                    <br/>
                    <span style={{display: "block"}}><b>Email:</b></span>
                    <span style={{display: "block"}}>{shelter.email}</span>
                    <br/>
                    <span style={{display: "block"}}><b>Free beds:</b></span>
                    <span style={{display: "block"}}>{shelter.number_of_beds - shelter.taken_beds}</span>
                    <br/>
                    <span style={{display: "block"}}><b>Intake hours:</b></span>
                    <span style={{display: "block"}}>{shelter.intake_hours.from} - {shelter.intake_hours.to}</span>
                    <br/>
                    <span style={{display: "block"}}><b>Rules:</b></span>
                    <span style={{display: "block"}}>Kids: {shelter.rules.kids_welcome ? "yes": "no"}</span>
                    <span style={{display: "block"}}>Animals: {shelter.rules.animals ? "yes": "no"}</span>
                    <span style={{display: "block"}}>Female only: {shelter.rules.female_only ? "yes": "no"}</span>
                    <span style={{display: "block"}}>Families welcome: {shelter.rules.families_welcome ? "yes": "no"}</span>
                    <span style={{display: "block"}}>Male only: {shelter.rules.male_only ? "yes": "no"}</span>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <Sidebar
                    sidebar={this.selectedShelterToString()}
                    open={this.state.sidebarOpen}
                    styles={{ sidebar: { background: "white" } }}
                    onSetOpen={this.onSetSidebarOpen}
                >
                    <Map center={this.state.position} zoom={12} style={{height: "90vh", zIndex: "0"}} >
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={this.state.position} icon={this.positionIcon} />
                        {
                            this.state.shelters.map((shelter, i) =>
                                <Marker onClick={() => {this.onSetSidebarOpen(true); this.setState({selectedShelter: shelter}) }} key={i} position={[shelter.address.geo.lat, shelter.address.geo.long]} icon={this.houseIcon}>

                                    <Tooltip direction='center' offset={[0, 50]} opacity={1} permanent={false}>
                                      <span>
                                    {shelter.name}
                                </span>
                                        <span>
                                   {shelter.name}
                                </span> <br/>
                                        <span>
                                   Email: {shelter.email}
                                </span> <br/>
                                        <span>
                                   Phone: {shelter.phone.mobile}
                                </span> <br/>
                                        <span>
                                   Intake Hours: {shelter.opening_hours.from} To {shelter.opening_hours.to}
                                </span>
                                    </Tooltip>
                                </Marker>
                            )
                        }
                    </Map>
                    <div style={{fontSize: "10px"}}>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>  <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">mavadee</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </Sidebar>
            </div>
        );
    }


};





