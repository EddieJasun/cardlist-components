import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
      <div className="tc bg-light-green dib br3 grow bw2 ma3 pa3 shadow-5">
        <img src={`https://robohash.org/${props.id}?100x100`} alt="robots" />
        <h2>{props.name} </h2>
        <p>{props.email}</p>
      </div>
    );
  } 
  
  export default Card;