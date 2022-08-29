import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component{
    render(){
        return (
        <div>
            <Link to="/">Voltar á home</Link>
            <span> Se meu navio de React é o de teseu e eu refatorei todos os seus componentes, ele ainda é o meu navio? </span>
        </div>
    )}
}

export default About;