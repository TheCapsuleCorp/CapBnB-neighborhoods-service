import React from 'react';
import Details from './Details';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../../dist/index.css';

const GOOGLE_MAPS_API_KEY = 'AIzaSyALnk5uTIhLwMzcanWu3Dspzuh3Gt47C2k';

const NeighborHoodMap = ({ google, lat, lng }) => {
  const mapStyles = {
    gridRow: 1/2,
    width: '58vw',
    height: '500px',
  };

  return (
    <div className="map-wrapper">
      <Map
        google={google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: lat, lng: lng}}
      />
      <div className="exact-location">
        Exact location information is provided after a booking is confirmed.
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY,
})(NeighborHoodMap);
