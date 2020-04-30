import React from "react";
import { connect } from "react-redux";


const mapStateToProps = function (state) {
  return {
    locationInput: state.locationInput 
  }
}

function LocationInputCard({locationInput}) {
  return (
    <div className="Card" id="LocationInputCard">
      <input type="text" defaultValue={locationInput}></input>
    </div>
  );
}

const ConnectedLocationInputCard = connect(mapStateToProps)(LocationInputCard);

export default ConnectedLocationInputCard;
