import React from 'react';
import Details from './Details';
import $ from 'jquery';
import { Map } from 'google-maps-react';
import NeighborHoodMap from './NeighborhoodMap';
import '../../dist/index.css';

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
      url: `http://localhost:3000/api/rooms/${this.props.roomId}/neighborhood`,
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
  }

  render() {
    const { city, country, description, gettingAround, guidebookId, hostName, lat, lng } = this.state;
    return (
      <div className="app">
        <span className="nbh">The neighborhood</span>
        <p>{hostName}'s place is located in <a href={`https://www.airbnb.com/s/${city}--${country}/all`}>{city}</a>
        , <a href={`http://www.airbnb.com/s/${country}/all`}>{country}</a>.
        </p>
        <p>{description}</p>
        <p>{gettingAround}</p>
        <Details guidebookId={guidebookId} gettingAround={gettingAround} />
        <NeighborHoodMap lat={lat} lng={lng} />
      </div>
    );
  }
}

export default App;
