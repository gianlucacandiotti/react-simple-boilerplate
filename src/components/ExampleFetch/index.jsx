import React, { PureComponent } from 'react';
import githubService from 'services/github';
import './styles.scssm';

const Repo = ({ url, name, description }) => (
  <div className="card">
    <div className="card-content">
      <p className="title is-6">
        {name}
      </p>
      <p className="subtitle">
        {description}
      </p>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item">
        <span>
          View on <a href={url}>Github</a>
        </span>
      </p>
    </footer>
  </div>
);

class ExampleFetch extends PureComponent {
  state = {
    username: '',
    isLoading: false,
    repos: [],
    error: '',
  };

  onChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  fetchRepos = async (e) => {
    e.preventDefault();

    this.setState({
      isLoading: true,
    });

    try {
      this.setState({
        repos: await githubService.getReposByUsername(this.state.username),
        error: '',
      });
    } catch(error) {
      this.setState({
        repos: [],
        error: error.message,
      });
    }

    this.setState({
      isLoading: false,
    });
  };

  render() {
    const {
      username,
      isLoading,
      repos,
      error,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.fetchRepos}>
          <div className="field">
            <div className="control">
              <input
                className={`
                  input
                  ${error ? 'is-danger' : ''}
                `}
                type="text"
                value={username}
                placeholder="Enter a github username to fetch some repos!"
                onChange={this.onChange}
                style={{
                  maxWidth: '400px',
                }}
              />
            </div>
            <p className="help is-danger">{error}</p>
          </div>
          <div className="field">
            <div className="control">
              <button
                className={`
                  button
                  is-primary
                  ${isLoading ? 'is-loading' : ''}
                `}
              >
                Fetch
              </button>
            </div>
          </div>
        </form>

        <ul styleName="list">
          {repos.map(repo => (
            <li key={repo.id} styleName="list-item">
              <Repo {...repo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ExampleFetch;
