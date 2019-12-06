import React from 'react';
import Details from './Details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hostName: '',
      city: '',
      country: '',
      gettingAround: '',
      description: '',
      guidebookId: null
    };
  }

  componentDidMount() {
    $.ajax({
      url: `/api/rooms/${this.props.roomId}/neighborhood`,
      // dataType: 'json',
      method: 'GET',
      // contentType: 'application/json',
      // data: JSON.stringify({jsonData: data}),
      success: (data) => {
        console.log(data);
        this.setState({
          hostName: data[0].name,
          city: data[0].city,
          country: data[0].country,
          gettingAround: data[0].gettingAround,
          description: data[0].description,
          guidebookId: data[0].guidebookId,
        });
      },
      error: function(error) {
        console.log(error);
      },

    });
  };

  render() {
    return (
      <div className="app">
        <h2>The neighborhood</h2>
        <p>{this.state.hostName}'s place is located in {this.state.city}, {this.state.country}.</p>
        <p>{this.state.description}</p>
        <p>{this.state.gettingAround}</p>
        <Details guidebookId={this.state.guidebookId} />
      </div>
    );
  }
}

export default App;
