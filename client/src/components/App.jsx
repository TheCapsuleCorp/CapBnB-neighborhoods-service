import React from 'react';
import Details from './Details';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import NeighborHoodMap from './NeighborhoodMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hostName: '',
      city: '',
      country: '',
      gettingAround: '',
      description: '',
      lat: null,
      lng: null,
      guidebookId: null,
    };
  }

  componentDidMount() {
    $.ajax({
      url: `/api/rooms/${this.props.roomId}/neighborhood`,
      method: 'GET',
      success: (neighborhood) => {
        this.setState({
          hostName: neighborhood[0].name,
          city: neighborhood[0].city,
          country: neighborhood[0].country,
          gettingAround: neighborhood[0].gettingAround,
          description: neighborhood[0].description,
          lat: neighborhood[0].latitude,
          lng: neighborhood[0].longitude,
          guidebookId: neighborhood[0].guidebookId,
        });
      },
      error: function(error) {
        console.log(error);
      },

    });
  };

  render() {
    const { hostName, city, country, description, gettingAround, guidebookId, lat, lng } = this.state;
    return (
      <div className="app">
        <h2>The neighborhood</h2>
        <p>{hostName}'s place is located in {city}, {country}.</p>
        <p>{description}</p>
        <p>{gettingAround}</p>

          <Details guidebookId={guidebookId} gettingAround={gettingAround} />
        <div  className="NeighborHoodMap">
          <NeighborHoodMap lat={lat} lng={lng} />
        </div>
      </div>
    );
  }
}

export default App;
