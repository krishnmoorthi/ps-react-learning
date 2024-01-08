import React, { Component } from 'react';

class ClassGreet extends Component {
    render() {
        const { title } = this.props;
        return (
            <div>
                <h5> Welcome to {title} !</h5>
            </div>
        )
    }
}

export default ClassGreet;
