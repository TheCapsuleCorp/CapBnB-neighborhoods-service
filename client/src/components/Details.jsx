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
    this.setState({
      showReadMore: !this.state.showReadMore,
    });
  }

  render() {
    let readMore = null;
    let icon = faChevronDown;
    if(this.state.showReadMore === true) {
      readMore = <ReadMore gettingAround={this.props.gettingAround} />
      icon = faChevronUp;
    }
    return (
      <div>
        <div onClick={this.handleReadMoreClick}>
          <span className="readMore">Read more about the neighborhood</span>
            <FontAwesomeIcon className="chevron" icon={icon} />
        </div>
        {readMore}
      </div>
    );
  }
}

export default Details;
