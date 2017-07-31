import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import ExampleModal from 'components/ExampleModal';
import reactLogo from 'assets/images/react-logo.png';
import sassLogo from 'assets/images/sass-logo.svg';
import reactCssModulesLogo from 'assets/images/react-css-modules-logo.png';
import './App.scssm';

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

        <div styleName="app-header">
          <div styleName="logos-container">
            <img src={reactLogo} styleName="logo" alt="React Logo" />
            <img src={sassLogo} styleName="logo" alt="Sass Logo" />
            <img src={reactCssModulesLogo} styleName="logo" alt="CSS Modules Logo" />
          </div>

          <h1 styleName="title">Welcome to react-simple-boilerplate</h1>
        </div>
        <div styleName="app-intro">
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <section styleName="components-section">
          <h2 styleName="components-section-title">
            Here are some example components!
          </h2>
          <div>
            <div>
              <h3 styleName="component-title">Example Modal</h3>
              <ExampleModal />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
