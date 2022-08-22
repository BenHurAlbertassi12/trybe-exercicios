import React from 'react';

class TextField extends React.Component {
  render() {
    const { type, name, value, onChange } = this.props;
    return <input nome={name} type={type} value={value} onChange={onChange} />;
  }
}
export default TextField;
