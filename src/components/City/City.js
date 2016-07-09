import React, { Component, PropTypes } from 'react';

export default class City extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    temperature: PropTypes.number
  };

  render() {
    const styles = require('./City.scss');
    const name = this.props.name;
//    const name = this.props.name;
    return (
      <div className={styles.city}>
        <h2>{ name }</h2>
        <h3>{ this.props.temperature }</h3>
      </div>
    );
  }
}

