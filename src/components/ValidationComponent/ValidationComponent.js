import React, {Component} from 'react';

export class ValidationComponent  extends React.Component {

    render() {

        const longEnough = this.props.length;
        let text = 'Text too short'

        if(longEnough < 6) {
            text = (
                <h1>Text too short!</h1>
            )
        } else {
            text = (
                <h1>Text long enough!</h1>
            )
        }

        return (
            <div>
                {text}
            </div>
        )
    }

}