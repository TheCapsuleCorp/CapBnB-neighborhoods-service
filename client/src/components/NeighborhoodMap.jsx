import React from 'react';
import Details from './Details';
import { Map, GoogleApiWrapper } from 'google-maps-react';
const googleMapApi = require('../../../googleMapConfig');

class NeighborHoodMap extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const mapStyles = {
      width: '50%',
      height: '50%',
    };

    const { lat, lng } = this.props;

    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: lat, lng: lng}}
        />
    );
  }
}

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCY1Do1VkdQyhIBB4KPOGOQbZqxpFHK86g',
  })(NeighborHoodMap);
