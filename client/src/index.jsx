import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let listingId = window.location.href.split('/')[4];
if (!listingId || listingId.length !== 8) {
  listingId = '11111142';
};

ReactDOM.render(<App roomId={listingId} />, document.getElementById('root'));
