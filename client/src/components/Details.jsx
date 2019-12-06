import React from 'react';
import ReadMore from './ReadMore';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReadMore: false,
    }

    this.handleReadMoreClick = this.handleReadMoreClick.bind(this);
  }

  handleReadMoreClick(event) {
    this.setState({
      showReadMore: !this.state.showReadMore,
      //toggles boolean value to handle all clicks for conditional rendering.
    });
  }

  render() {
    //conditional rendering example
    let readMore = null;
    if (this.state.showReadMore === true) {
      readMore = <ReadMore guidebookId={this.props.guidebookId} />
    }
    return (
      <div>
        <p className="description">{this.state.name}'s place is located in {this.state.city}, {this.state.country}.</p>
        <p>{this.state.description}</p>
        <div onClick={this.handleReadMoreClick}>Read more about the neighborhood</div>
        {readMore}
      </div>
    );
  }
}

export default Details;
