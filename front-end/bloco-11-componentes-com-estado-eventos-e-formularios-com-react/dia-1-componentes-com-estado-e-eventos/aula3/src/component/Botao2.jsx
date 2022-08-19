import React from "react";


class Botao2 extends React.Component{
    constructor() {
        super()
        console.log('Componente sendo Construido');
        
    }
    handleClick() {
    console.log('Clicou no botão!')
}
render() {
    return <button onClick={this.handleClick}>Meu Botão</button>
}

}
export default Botao2;