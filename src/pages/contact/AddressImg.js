import React, { Component } from 'react';
import myPngImage from '../../assests/images/address.png'; // Update this path

export default class AddressImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <img
          id="aaafdec0-95c8-49a3-a8f8-64216c6da511" // You can keep the same ID or change it
          src={myPngImage}
          alt="Description of your image"
          style={{ width: '100%', height: 'auto' }} // Adjust the style as needed
        />
      </div>
    );
  }
}
