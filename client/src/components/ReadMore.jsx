import React from 'react'

const ReadMore = ({ gettingAround, guidebookId }) => (

  <div>
    <h3>Getting Around</h3>
    <p>{gettingAround}</p>
    <h3>Guidebook</h3>
    <p>For more information, checkout the {guidebookId}.</p>
  </div>
);


export default ReadMore;
