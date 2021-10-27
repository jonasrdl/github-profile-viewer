import React from 'react'
const axios = require('axios').default
const API = 'https://api.github.com'

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      DataIsLoaded: false,
      username: '',
    }
  }

  fetchUser(username) {
    axios
      .get(API + `/users/${username}`)
      .then((result) => {
        this.setState({
          data: result.data,
          DataIsLoaded: true,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { DataIsLoaded, data, username } = this.state

    if (!DataIsLoaded) {
      return (
        <div>
          <form>
            <input
              type="text"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                this.fetchUser(this.state.username)
              }}
            >
              Search
            </button>
          </form>
        </div>
      )
    }

    return (
      <div>
        <img src={this.state.data.avatar_url} alt="Avatar" />
        <p>Real name: {this.state.data.name || '/'}</p>
        <p>Username: {this.state.data.login || '/'}</p>
        <p>
          Profile link:{' '}
          <a href={this.state.data.html_url} target="_blank">
            {this.state.data.html_url}
          </a>
        </p>
        <p>Company: {this.state.data.company || '/'}</p>
        <p>
          Website:{' '}
          <a href={this.state.data.blog} target="_blank">
            {this.state.data.blog}
          </a>
        </p>
        <p>Location: {this.state.data.location || '/'}</p>
        <p>
          Twitter:{' '}
          <a href={`https://twitter.com/${this.state.data.twitter_username}`} target="_blank">
            {this.state.data.twitter_username}
          </a>
        </p>
        <p>Email: {this.state.data.email || '/'}</p>
        <p>Followers: {this.state.data.followers || '/'}</p>
        <p>Following: {this.state.data.following || '/'}</p>
        <p>Created at: {this.state.data.created_at || '/'}</p>
      </div>
    )
  }
}

export default Hero
