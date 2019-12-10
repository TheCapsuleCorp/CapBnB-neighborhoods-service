import React from 'react';
import Details from './Details';
import { Map, GoogleApiWrapper } from 'google-maps-react';

// DO NOT COMMIT ME TO VERSION CONTROL!!!!!
const GOOGLE_MAPS_API_KEY = 'AIzaSyALnk5uTIhLwMzcanWu3Dspzuh3Gt47C2k';

class NeighborHoodMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mapStyles = {
      width: '100%',
      height: '500px',
      position: 'relative',
    };

    const { lat, lng } = this.props;

    return (
    <div>
      <div className="map-out">
        <div className="map-in">
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: lat, lng: lng}}
          />
        </div>
      </div>
        <div className="exact-location">Exact location information is provided after a booking is confirmed
        </div>
    </div>
    );
  };
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY,
})(NeighborHoodMap);
