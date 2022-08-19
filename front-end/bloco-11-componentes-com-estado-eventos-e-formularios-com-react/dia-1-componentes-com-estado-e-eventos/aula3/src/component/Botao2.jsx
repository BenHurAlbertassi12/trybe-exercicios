import React from "react";

function handleClick() {
    console.log('Clicou no botão!')
}
function handleClick2() {
    console.log('Clicou no botão2!')
}
function handleClick3() {
    console.log('Clicou no botão!3')
}
class Botao2 extends React.Component{
render() {
    return (
        <button onClick={handleClick}>Meu Botão</button>,
        <p>Botão 2</p>,
        <button onClick={handleClick2}>Meu Botão2</button>,
        <p>Botão 3</p>,
    <button onClick={handleClick3}>Meu Botão3</button>)
    }

}
export default Botao2;