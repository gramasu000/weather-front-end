/** @module TextCard
 * Exports TextCard Component
 *
 * @author [Gautam Ramasubramanian](https://github.com/gramasu000)
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

/** Represents a plain or header text in a Card div */
export default class TextCard extends Component {
  static propTypes = {
    /** weight can be "h2" or "p"
     *  If "h2", text is shown using <h2> tag
     *  Else, text is shown using the <p> tag
     */
    weight: PropTypes.string,
    /** content is an object with property "text"
     * {
     *    text: "Text to be displayed in TextCard"
     * }
     */
    content: PropTypes.object,
  }

  /**
   * @method render
   * @return {React.Element}
   */
  render() {
    /* If weight is "h2", return header2 text inside Card div
     * Otherwise, return p text inside Card div
     */
    if (this.props.weight === 'h2') {
      return (
        <div className="Card">
          <h2>{this.props.content.text}</h2>
        </div>
      );
    } else {
      return (
        <div className="Card">
          <p>{this.props.content.text}</p>
        </div>
      );
    }
  }
}
