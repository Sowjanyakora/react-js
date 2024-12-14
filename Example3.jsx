import React, { Component } from 'react';

export class Example3 extends Component {
    constructor() {
        super();
        this.state = { name: "", age: 0 };
    }

    changeName = (e) => {
        this.setState({ name: e.target.value });
    }

    changeAge = (e) => {
        this.setState({ age: e.target.value });
    }

    render() {
        return (
            <div>
                <div>
                    Name: <input type="text" onChange={this.changeName} />
                </div>
                <div>
                    Age: <input type="number" onChange={this.changeAge} />
                </div>
                <button onClick={() => alert(`Name: ${this.state.name}, Age: ${this.state.age}`)}>
                    Click
                </button>
                <br />
                Name: {this.state.name}<br />
                Age: {this.state.age}<br />
            </div>
        );
    }
}

export default Example3;