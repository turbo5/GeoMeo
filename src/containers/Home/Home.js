import React, { Component } from 'react';
import Helmet from 'react-helmet';
import List from '../List/List';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>

        <div className="container">
          <List />
        </div>
      </div>
    );
  }
}
