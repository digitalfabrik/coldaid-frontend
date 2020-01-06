import React, {Component} from 'react';
import {usePosition} from '../components/usePosition';
import {useTranslation} from 'react-i18next';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MapPage () {

    const {t}                   = useTranslation();
    const {latitude, longitude, error} = usePosition();
    let position = [52.52, 13.4];
    if (latitude !== undefined && longitude !== undefined) {
        position = [latitude.toFixed(2), longitude.toFixed(2)]
    }
    return (
        <Map center={position} zoom={13} style={{height: "90vh"}}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </Map>
    );
};
