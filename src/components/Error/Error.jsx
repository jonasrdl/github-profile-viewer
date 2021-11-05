import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

class Error extends React.Component {
  render() {
    return (
      <div className="error">
        <h1>An error occured</h1>
        <Link to={'/'} className="link">
          Back home
        </Link>
      </div>
    )
  }
}

export default Error
