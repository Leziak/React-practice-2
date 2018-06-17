import React, {Component} from 'react';
import './CharComponent.css'

export class CharComponent  extends React.Component {

    render() {

        return (
            <div onClick={this.props.clicked} className={'Block'}>
                <h1>{this.props.letter}</h1>
            </div>

        )
    }

}