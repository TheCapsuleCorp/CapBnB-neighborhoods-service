import React from 'react';
import ReadMore from './ReadMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
    let icon = faChevronDown;
    if(this.state.showReadMore === true) {
      readMore = <ReadMore />
      icon = faChevronUp;
    }
    return (
      <div>
        <div onClick={this.handleReadMoreClick}>
          <span className="readMore">Read more about the neighborhood</span>
          <FontAwesomeIcon icon={icon} />
        </div>
        {readMore}
      </div>
    );
  }
}

export default Details;
