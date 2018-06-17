import React, {Component} from 'react';
import './App.css';
import {ValidationComponent} from "./components/ValidationComponent/ValidationComponent";
import {CharComponent} from "./components/CharComponent/CharComponent";

class App extends Component {

    constructor() {
        super();
        this.state = {
            length: 0,
            text: []
        }
    }

    inputLengthHandler = (event) => {
        this.setState({length: event.target.value.length})
    }

    inputTextHandler = (event) => {
        this.setState({text: event.target.value.split('')})
    }

    deleteCharHandler = (index) => {
        const text = [...this.state.text];

        console.log(index, text);

        text.splice(index, 1);

        this.setState({text:text});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(event) => {this.inputLengthHandler(event);this.inputTextHandler(event)}}/>
                <ValidationComponent length={this.state.length}/>
                {this.state.text.map((letter, index) => {
                    return (
                        <CharComponent clicked={this.deleteCharHandler.bind(index)} letter={letter}/>
                    )
                })}
            </div>
        );
    }
}

export default App;
