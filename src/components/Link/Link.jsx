import React from 'react'

class Link extends React.Component {
  render() {
    return (
      <a href={this.props.url} target="_blank" rel="noreferrer">
        {this.props.text}
      </a>
    )
  }
}

export default Link
