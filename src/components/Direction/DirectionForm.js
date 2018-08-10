import React, { Component } from 'react'

export default class DirectionForm extends Component {
  render() {
    return (
        <div>
          <label for='destination'>Destination: </label>
          <br />
          <input type='text' name='destination' />
          <br />
          <br />
          <label for='destination'>Location: </label> <br />
          <input type='text' name='location' />
          <br />
          <br />
          <button>View Direction</button>
      </div>
    )
  }
}
