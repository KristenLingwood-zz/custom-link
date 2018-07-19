import React, { Component } from 'react';
import CustomLink from './CustomLink';
import './App.css';

class App extends Component {
  state = {
    linkOn: true
  };

  toggleDisablingLinks = () => {
    this.setState({ linkOn: !this.state.linkOn });
  };

  handleClick = evt => {
    if (this.state.linkOn === false) {
      evt.preventDefault();
    }
  };

  render() {
    let links = [
      { href: 'https://www.rithmschool.com', text: 'Rithm School' },
      { href: 'https://facebook.github.io/react/', text: 'React Docs' },
      { href: 'https://www.codewars.com/dashboard', text: 'CodeWars' }
    ].map(l => (
      <CustomLink href={l.href} text={l.text} clickLink={this.handleClick} />
    ));

    return (
      <div className="App">
        {links}
        <button onClick={this.toggleDisablingLinks}>
          {this.state.linkOn ? `Links are ON` : `Links are OFF`}
        </button>
      </div>
    );
  }
}

export default App;
