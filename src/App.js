import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import ExampleModal from 'components/ExampleModal';
import ExampleFetch from 'components/ExampleFetch';
import reactLogo from 'assets/images/react-logo.png';
import reactRouterLogo from 'assets/images/react-router-logo.png';
import sassLogo from 'assets/images/sass-logo.svg';
import reactCssModulesLogo from 'assets/images/react-css-modules-logo.png';
import bulmaLogo from 'assets/images/bulma-logo.png';
import './App.scssm';

const title = 'react-simple-boilerplate';

const ExampleComponent = ({ title, children }) => (
  <div className="box" styleName="mb-small">
    <h3 className="title is-5">{title}</h3>
    <div>
      {children}
    </div>
  </div>
);

const TechListItem = ({ title, image, link }) => (
  <div styleName="flex-container">
    <div styleName="flex-container list-item-info">
      <span className="has-text-grey-darker" styleName="list-item-title">
        {title}
      </span>
      <img src={image} styleName="list-item-image" alt={title} />
    </div>
    <a
      className="has-text-grey-darker"
      href={link}
      target="_blank"
    >
      (Docs)
    </a>
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

        <section className="hero is-medium is-warning is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                react-simple-boilerplate
              </h1>
              <p className="subtitle">
                A React boilerplate for simple static web apps
              </p>
            </div>
          </div>
        </section>

        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h2 className="title">
                Same workflow as <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a>
              </h2>
              <p className="subtitle">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </div>
          </div>
        </section>

        <section className="section has-text-left">
          <div className="container">
            <h2 className="title">Example Components</h2>
            <p className="subtitle">
              You may keep these components in your project or jut use them as reference.
            </p>

            <div>
              <ExampleComponent title="Example Modal">
                <ExampleModal />
              </ExampleComponent>

              <ExampleComponent title="Example for fetching from an API">
                <ExampleFetch />
              </ExampleComponent>
            </div>
          </div>
        </section>

        <section className="section has-text-left">
          <div className="container">
            <h2 className="title">Technologies</h2>
            <h3 className="subtitle">
              These are some of the technologies that power this project.
            </h3>
            <ul>
              <li>
                <TechListItem
                  title="React"
                  image={reactLogo}
                  link="https://facebook.github.io/react/docs/hello-world.html"
                />
                <TechListItem
                  title="React Router"
                  image={reactRouterLogo}
                  link="https://github.com/ReactTraining/react-router"
                />
                <TechListItem
                  title="Sass"
                  image={sassLogo}
                  link="http://sass-lang.com/documentation/file.SASS_REFERENCE.html"
                />
                <TechListItem
                  title="React CSS Modules"
                  image={reactCssModulesLogo}
                  link="https://github.com/gajus/babel-plugin-react-css-modules"
                />
                <TechListItem
                  title="Bulma"
                  image={bulmaLogo}
                  link="http://bulma.io/documentation/elements/content/"
                />
              </li>
            </ul>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Powered by</strong> <a href="https://github.com/gianlucacandiotti/react-simple-boilerplate">react-simple-boilerplate</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
