class githubService {
  endpoint = process.env.REACT_APP_GITHUB_URL;

  async getReposByUsername(username) {
    const url = `${this.endpoint}/users/${username}/repos?per_page=5`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`GithubService getReposByUsername failed, HTTP status ${response.status}`);
    }

    const data = await response.json();

    if (data.Error) {
      throw new Error(`GithubService getReposByUsername failed, There was an error in the response ${data.Error}`);
    }

    return data.map(repo => ({
      id: repo.id,
      url: repo.url,
      name: repo.name,
      description: repo.description,
    }));
  }
}

export default new githubService();
