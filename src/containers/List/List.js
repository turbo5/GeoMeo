/**
 * Created by Turbo on 2016.07.09..
 */

import React, { Component } from 'react';
import City from '../../components/City/City';
import CityAddForm from '../../components/CityAddForm/CityAddForm';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.handleNewData = this.handleNewData.bind(this);
    this.state = {
      cities: []
    };
  }

  handleNewData = (data) => {
    this.setState(
      {
        cities: this.state.cities.push(data)
      }
    );
  };

  render() {
    const cities = this.state.cities;
    return (
      <div>
        <div>
          {
            cities.map((city) =>
              <City name={city.name} temperature={city.temperature} />
            )
          }
        </div>
        <div>
          <CityAddForm onNewData={this.handleNewData} />
        </div>
      </div>
    );
  }
}

