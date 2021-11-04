import React from 'react'
import './Input.css'

class Input extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  render() {
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
              window.location.href = `/profile/${this.state.username}`
            }}
          >
            Search
          </button>
        </form>
      </div>
    )
  }
}

export default Input
