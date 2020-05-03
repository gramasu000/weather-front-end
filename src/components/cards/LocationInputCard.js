import React from "react";
import { connect } from "react-redux";


const mapStateToProps = function (state, ownProps) {
  return {
    locationInput: state.locationInput, 
    locationInputRef: ownProps.inputRef
  }
}

function LocationInputCard({locationInput, locationInputRef}) {
  return (
    <div className="Card" id="LocationInputCard">
      <input type="text" defaultValue={locationInput} ref={locationInputRef} />
    </div>
  );
}

const ConnectedLocationInputCard = connect(mapStateToProps)(LocationInputCard);

export default ConnectedLocationInputCard;
