import React, { Component } from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import styles from './App.scssm';

const title = 'react-simple-boilerplate';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>{title}</title>
        </Helmet>

        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
