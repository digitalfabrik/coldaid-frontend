import React, {Component} from 'react';
import {usePosition} from '../components/usePosition';
import {useTranslation} from 'react-i18next';
import L from 'leaflet';
import { Map, Polygon, TileLayer, Tooltip, Marker, Popup } from 'react-leaflet'
import FetchShelters from '../components/FetchShelters'
export default function MapPage () {


    const shelters = FetchShelters();        
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
            {
            	shelters.map((shelter, i) =>
					<Marker position={[shelter.address.geo.lat, shelter.address.geo.long]}>
			            <Popup>
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
                               Opening Hours: {shelter.opening_hours.from} To {shelter.opening_hours.to}
                            </span>
			            </Popup>
			            <Tooltip direction='right' offset={[-8, -2]} opacity={1} permanent>
			                      <span>
			                    {shelter.name}
			                </span>              
			            </Tooltip>
		            </Marker>

            	 )
            }
            

        </Map>
    );


};





