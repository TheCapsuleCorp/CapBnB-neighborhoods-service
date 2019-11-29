import React from 'react';
import ReadMore from './ReadMore'

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReadMore: false
    }
  }

  handleReadMoreClick(event) {
    event.preventDefault();
    this.setState({
      showReadMore: true
    });
  }

  render() {
    return (
      <a href="https://www.templink.com">Read more about the neighborhood</a>
    );
  }
}

export default Details;
