import React from 'react';
import ReadMore from './ReadMore'

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReadMore: false,
    }
    this.handleReadMoreClick = this.handleReadMoreClick.bind(this);
  }

  handleReadMoreClick(event) {
    event.preventDefault();
    this.setState({
      showReadMore: !this.state.showReadMore,
    });
  }

  render() {
    let readMore = null;
    if(this.state.showReadMore === true) {
      readMore = <ReadMore />
    }
    return (
      <div>
        <div className="readMore" onClick={this.handleReadMoreClick}>Read more about the neighborhood</div>
        {readMore}
      </div>
    );
  }
}

export default Details;
