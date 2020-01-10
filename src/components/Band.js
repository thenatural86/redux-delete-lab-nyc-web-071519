import React, { Component } from "react"

class Band extends Component {
  handleClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return (
      <div>
        Band Component
        <li>
          {this.props.name} <button onClick={this.handleClick}>Delete</button>
        </li>
      </div>
    )
  }
}

export default Band
