import React from 'react';

class Button extends React.Component {
  render() {
    const { title, type, onClick } = this.props;
    return (
      <button type={type} onClick={onClick}>
        {title}
      </button>
    );
  }
}
export default Button;
