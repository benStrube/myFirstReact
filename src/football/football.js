import React from 'react';

class Football extends React.Component {
    constructor(props) {
        super(props)
        this.shoot = this.shoot.bind(this)
    }
    shoot = (a,b) => {
        alert(b.type);
    }
    render() {
        return (
            <button onClick={(env) => this.shoot("Goal", env)}>Take the Shot!</button>
        )
    }
}

export default Football;