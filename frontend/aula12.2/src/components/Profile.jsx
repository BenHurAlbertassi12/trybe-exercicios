import React from 'react';

class Profile extends React.Component{
    render(){
        const { ship } = this.props.match.params;
        return <h1> Meu Perfil: {this.props.name}, do navio {ship} </h1>
    }
}

export default Profile;