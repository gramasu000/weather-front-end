import React from "react";
import { connect } from "react-redux";


const mapStateToProps = function(state) {
  return {
    menuItems: state.menuItems,
    selected: state.selected
  }
}

let convertToListItem = function(entry) {
  return <li key={entry.id}><h2>{entry.city}, {entry.country}</h2></li>; 
}

function MenuCard({ menuItems, selected }) {
  const listItems = menuItems.map(convertToListItem);
  return (
    <div className="Card" id="MenuCard">
      <ul>{listItems}</ul>
    </div>
  );
}

const ConnectedMenuCard = connect(mapStateToProps)(MenuCard);

export default ConnectedMenuCard;
