import React from "react";
import { connect } from "react-redux";


const mapStateToProps = function(state) {
  return {
    menuItems: state.menuItems,
    selected: state.selected
  }
}

function MenuCard({ menuItems, selected }) {
  
  const convertToListItem = (entry) => {
    if (entry.id === selected) {
      return (
        <li key={entry.id} className="bg-gray-300">
          <h2>{entry.city}, {entry.country}</h2>
        </li>
      ); 
    } else {
      return (
        <li key={entry.id} className="bg-gray-100">
          <h2>{entry.city}, {entry.country}</h2>
        </li>
      ); 
    }
  };

  const listItems = menuItems.map(convertToListItem);
  return (
    <div className="Card" id="MenuCard">
      <ul>{listItems}</ul>
    </div>
  );
}

const ConnectedMenuCard = connect(mapStateToProps)(MenuCard);

export default ConnectedMenuCard;
