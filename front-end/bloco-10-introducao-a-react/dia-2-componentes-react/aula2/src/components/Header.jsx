import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.titulo}</h1>
      </header>
    );
  }
}
export default Header;
