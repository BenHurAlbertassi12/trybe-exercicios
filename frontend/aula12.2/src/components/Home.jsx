import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return (
        <div>
            <Link to="/about">About</Link>
            <h1>Minha Home Page</h1>
        </div>
    )}
}

export default Home;