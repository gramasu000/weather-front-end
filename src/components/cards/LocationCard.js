import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = function(state) {
  return {
    locationText: `${state.defaultCity}, ${state.defaultCountry}` 
  }
}

function LocationCard({locationText}) {
  return (
    <div className="Card" id="LocationCard">
      <h2>{locationText}</h2>
    </div>
  );
}

const ConnectedLocationCard = connect(mapStateToProps)(LocationCard);

export default ConnectedLocationCard;
