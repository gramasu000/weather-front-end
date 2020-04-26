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
    /** Return p text inside Card div */
    return (
      <div className="Card">
        <p>{this.props.content.text}</p>
      </div>
    );
  }
}
