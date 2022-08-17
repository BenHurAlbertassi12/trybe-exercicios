import React from 'react';
//import PropTypes from 'prop-types';

class GameInfo extends React.Component {
  render() {
    const { id, name, type, image } = this.props.gameInfo;

    return (
      <section className='ga,eçost-section'>
        <div>
          <span>
            <strong>ID:</strong>
            {id}
          </span>
          <span>
            <strong>Title:</strong>
            {name}
          </span>
          <span>
            <strong>Developer:</strong>
            {type}
          </span>
          {/* <span>
            <strong>Sale:</strong>
            {sales}
          </span> */}
          <span>
            <strong>Imagem:</strong>
            <img src={image} alt={name} />
          </span>
        </div>
      </section>
    );
  }
}

export default GameInfo;
