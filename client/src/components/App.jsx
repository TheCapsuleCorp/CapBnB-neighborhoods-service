import React from 'react';
import Details from './Details.jsx';

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



  };

  render() {
    return (
      <div className="App">
        <h2>The neighborhood</h2>
        <p className="description">{this.state.name}'s place is located in {this.state.city}, {this.state.country}.</p>
        <p>{this.state.description}</p>
        <p>{this.state.gettingAround}</p>
        <Details guidbookId={this.state.guidebookId} />
      </div>
    );
  }
}

export default App;
