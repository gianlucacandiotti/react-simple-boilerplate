import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import ExampleModal from 'components/ExampleModal';
import ExampleFetch from 'components/ExampleFetch';
import reactLogo from 'assets/images/react-logo.png';
import sassLogo from 'assets/images/sass-logo.svg';
import reactCssModulesLogo from 'assets/images/react-css-modules-logo.png';
import './App.scssm';

const title = 'react-simple-boilerplate';

const ExampleComponent = ({ title, children }) => (
  <div styleName="component">
    <h3 styleName="component-title">{title}</h3>
    <div>
      {children}
    </div>
  </div>
);

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
            <ExampleComponent title="Example Modal">
              <ExampleModal />
            </ExampleComponent>
            <ExampleComponent title="Example for fetching from an API">
              <ExampleFetch />
            </ExampleComponent>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
