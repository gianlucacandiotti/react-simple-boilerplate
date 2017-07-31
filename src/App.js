import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import reactLogo from 'assets/images/react-logo.png';
import sassLogo from 'assets/images/sass-logo.svg';
import cssModulesLogo from 'assets/images/css-modules-logo.png';
import styles from './App.scssm';

const title = 'react-simple-boilerplate';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>{title}</title>
        </Helmet>

        <div className={styles.appHeader}>
          <div className={styles.logosContainer}>
            <img src={reactLogo} className={styles.logo} alt="React Logo" />
            <img src={sassLogo} className={styles.logo} alt="Sass Logo" />
            <img src={cssModulesLogo} className={styles.logo} alt="CSS Modules Logo" />
          </div>

          <h1 className={styles.title}>Welcome to react-simple-boilerplate</h1>
        </div>
        <div className={styles.appIntro}>
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
