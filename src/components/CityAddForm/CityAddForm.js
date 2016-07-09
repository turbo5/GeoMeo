import React, { Component, PropTypes } from 'react';

export default class CityAddForm extends Component {
  static propTypes = {
    onNewData: PropTypes.func
  };

  onSubmit = (event) => {
    event.preventDefault();
    const data = {};
    data.name = this.refs.name.value;
//    data.temperature = this.refs.temperature.value;
    this.refs.name.value = '';
    this.props.onNewData(data);
  };

  render() {
//    const styles = require('./CityAddForm.scss');
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref="name" placeholder="Name of the city" />
      </form>
    );
  }
}

