import React from 'react'
import '../../dist/index.css';

const ReadMore = ({ gettingAround, guidebookId }) => (
  <div className="read-more">
    <h3 className="headers">Getting Around</h3>
    <p>{gettingAround}</p>
    <h3 className="headers">Guidebook</h3>
    <p>For more information, checkout the {guidebookId}.</p>
  </div>
);


export default ReadMore;
