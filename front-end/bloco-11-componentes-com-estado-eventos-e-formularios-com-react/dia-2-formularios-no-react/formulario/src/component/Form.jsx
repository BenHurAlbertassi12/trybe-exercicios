import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.handleValue = this.handleValue.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    };
  }
  handleValue({ target }) {
      const { name } = target;
      const value = target.type ==='checkbox' ? target.checked : target.value
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React:</h1>
        <h2>Ferramenta incrivel ou reagindo a Regionalismos?</h2>
        <form className='form'>
          <label>
            Diga Qual é o seu estada Favorito! do Brasil ou do React, quem sabe
            <textarea
              name='estadoFavorito'
              value={this.state.estadoFavorito}
              onChange={this.handleValue}
            />
          </label>

          <label>
            Email
            <input
              name='email'
              value={this.state.email}
              onChange={this.handleValue}
              type='email'
            />
          </label>

          <label>
            Nome
            <input
              name='nome'
              value={this.state.nome}
              onChange={this.handleValue}
              type='text'
            />
          </label>

          <label>
            Idade
            <input
              name='idade'
              value={this.state.idade}
              onChange={this.handleValue}
              type='number'
            />
          </label>

          <label>
            Vai comparecer à conferencia?
            <input
              name='vaiComparecer'
              value={this.state.vaiComparecer}
              onChange={this.handleValue}
              type='checkbox'
            />
          </label>

          <label>
            Escolha sua palavra chave favorita:
            <select
              name='palavraChaveFavorita'
              value={this.state.palavraChaveFavorita}
              onChange={this.handleValue}>
              <option value='estado'>Estado</option>
              <option value='evento'>Evento</option>
              <option value='props'>Props</option>
              <option value='hooks'>Hooks</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
export default Form;
