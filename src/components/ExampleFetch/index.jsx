import React, { PureComponent } from 'react';
import githubService from 'services/github';
import './styles.scssm';

const RepoInfoGroup = ({ label, value }) => (
  <div styleName="repo-info-group">
    <span styleName="repo-label">{label}</span>
    <p styleName="repo-value">{value}</p>
  </div>
);

const Repo = ({ url, name, description }) => (
  <div styleName="repo">
    <RepoInfoGroup label="Name:" value={name} />
    <RepoInfoGroup label="Description:" value={description} />
    <RepoInfoGroup label="URL:" value={url} />
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
        {error && (
          <div styleName="error-wrapper">
            <span styleName="error">{error}</span>
          </div>
        )}
        <form onSubmit={this.fetchRepos}>
          <div>
            <input
              type="text"
              value={username}
              placeholder="Enter a github username to fetch some repos!"
              styleName="input"
              onChange={this.onChange}
            />
            <button styleName="button">
              Fetch
              <div styleName={`overlay ${isLoading ? 'is-active' : ''}`}>
                <span styleName="loading-gif" />
              </div>
            </button>
          </div>
        </form>
        <ul styleName="repos-list">
          {repos.map(repo => (
            <li
              key={repo.id}
              styleName="repo-list-item"
            >
              <Repo {...repo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ExampleFetch;
