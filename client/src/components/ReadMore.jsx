import React from 'react'

const ReadMore = (props) => (
  <div>
    <h3>Getting Around</h3>
    <p>{props.gettingAround}</p>
    <h3>Guidebook</h3>
    <p>For more information, checkout the {props.guidebook}.</p>
  </div>
);


export default ReadMore;
