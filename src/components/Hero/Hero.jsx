import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
const axios = require('axios').default
const API = 'https://api.github.com'

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      usernameFromUrl: this.props.match.params.username,
      error: false,
      inputValue: '',
      username: ''
    }
  }

  componentDidMount() {
    axios
      .get(API + `/users/${this.state.usernameFromUrl}`)
      .then((result) => {
        this.setState({
          data: result.data,
          error: false
        })
      })
      .catch((error) => {
        console.log(error)

        this.setState({
          error: true
        })
      })
  }

  returnError() {
    window.location.href = '/error'
  }

  render() {
    console.log(this.state.usernameFromUrl)

    if (this.state.error === true) {
      return this.returnError()
    }

    return (
      <div className="main-container">
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
