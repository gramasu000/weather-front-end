import React, { Component } from 'react';
import "./LocationCard.css";


export default class LocationCard extends Component {

  render() {
    return (
        <div id="LocationCard" className="Card">
          <input size="20" type="text" placeholder={this.props.content.name} />
        </div>
    );
  }

}
//<ul className="Menu">
//          <li>Hi</li>
//         </ul>
