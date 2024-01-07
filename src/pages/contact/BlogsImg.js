import React, { Component } from "react";
import newPngImage from '../../assests/images/blogs.png'; // Import the new PNG file here

export default class BlogsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="blog-heading-img-div">
        <img
          id="new-png-image"
          src={newPngImage} // Use your imported PNG image here
          alt="New PNG Image"
          style={{ maxWidth: '100%', height: 'auto' }} // Adjust the style as needed
        />
      </div>
    );
  }
}
