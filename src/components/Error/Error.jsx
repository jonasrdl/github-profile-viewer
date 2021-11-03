import React from 'react'
import { Link } from 'react-router-dom'

class Error extends React.Component {
  render() {
    return (
      <div className="error">
        <h1>Error</h1>
        <Link to={'/'}>Back home</Link>
      </div>
    )
  }
}

export default Error
