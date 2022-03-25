import React, { Component } from 'react'
import BubbleAlert from '../bubbleAlert'

export default class Button extends Component {
  
  render() {
    // const { cart } = this.props
    // const quantity = cart.reduce((acc, el) => acc + el.quantity, 0);

    return (
      <>
        <button {...this.props} />
      </>
    )
  }
}
