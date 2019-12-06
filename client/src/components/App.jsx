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
      method: 'GET',
      success: (neighborhood) => {
        this.setState({
          hostName: neighborhood[0].name,
          city: neighborhood[0].city,
          country: neighborhood[0].country,
          gettingAround: neighborhood[0].gettingAround,
          description: neighborhood[0].description,
          guidebookId: neighborhood[0].guidebookId,
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
