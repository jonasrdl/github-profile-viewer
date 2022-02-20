import React from 'react'
import './Profile.css'
import Link from '../Link/Link'
import { BarLoader } from 'react-spinners'
const axios = require('axios').default
const API = 'https://api.github.com'

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
      data: [],
      usernameFromUrl: this.props.match.params.username,
      error: false,
      imageLoaded: false
    }
  }

  componentDidMount() {
    axios
      .get(API + `/users/${this.state.usernameFromUrl}`)
      .then(result => {
        this.setState({
          loaded: true,
          data: result.data,
          error: false
        })
      })
      .catch(error => {
        console.log(error)

        window.location.href = '/error'
      })
  }

  render() {
    if (!this.state.loaded) {
      return (
        <div>
          <BarLoader />
        </div>
      )
    } else {
      return (
        <div className="main">
          {this.state.imageLoaded ? null : <BarLoader />}
          <img
            src={this.state.data.avatar_url}
            alt="Avatar"
            onLoad={() => this.setState({ imageLoaded: true })}
          />{' '}
          <p>Real name: {this.state.data.name || '/'}</p>
          <p>Username: {this.state.data.login || '/'}</p>
          <p>
            Profile link: <Link url={this.state.data.html_url} text={this.state.data.html_url} />
          </p>
          <p>Company: {this.state.data.company || '/'}</p>
          <p>
            Website: <Link url={this.state.data.blog} text={this.state.data.blog} />
          </p>
          <p>Location: {this.state.data.location || '/'}</p>
          {this.state.data.twitter_username === null ? (
            <p>Twitter: /</p>
          ) : (
            <p>
              Twitter:{' '}
              <Link
                url={`https://twitter.com/${this.state.data.twitter_username}`}
                text={this.state.data.twitter_username}
              />
            </p>
          )}
          <p>Email: {this.state.data.email || '/'}</p>
          <p>Bio: {this.state.data.bio || '/'}</p>
          <p>Followers: {this.state.data.followers || '/'}</p>
          <p>Following: {this.state.data.following || '/'}</p>
          <p>Created at: {this.state.data.created_at || '/'}</p>
        </div>
      )
    }
  }
}

export default Profile
