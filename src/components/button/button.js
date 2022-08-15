import React, { Component } from "react";
import diceButton from "../../assets/images/icon-dice.svg";

class Button extends Component {
    state = {};

    render() {
        return (
            <div>
                <button onClick={this.props.fetchData}>
                    <img src={diceButton} />
                </button>
            </div>
        );
    }
}

export default Button;
