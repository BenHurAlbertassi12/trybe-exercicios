import React from 'react';
import data from '../data.js';

class ScriptAula extends React.Component {
  state = {
      search: "",
      turma: 24
  };
  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };
    handleChangeTurma = (event) => {
        this.setState({ turma: event.target.turma })
  }
    
  render() {
    return (
      <div>
            <input type='text' onChange={this.handleChange} />
            <input type='text' onChange={this.handleChangeTurma} />
        <ul>
          {data
            .filter((poke) => poke.name.includes(this.state.search))
            .map((poke) => 
              <li key={poke.id}>{poke.name}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default ScriptAula;
