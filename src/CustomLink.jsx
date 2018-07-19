import React, { Component } from 'react';

class CustomLink extends Component {

// openLink = () => 

render() {
  return (
    <div>
      <a href={this.props.href} target='_blank'  onClick={this.props.clickLink}>{this.props.text}</a>
    </div>
  )
}

}

export default CustomLink;
