import React, { Component } from "react";
import diceButton from "../../assets/images/icon-dice.svg";
import styles from "./Button.module.css";

class Button extends Component {
    state = {};

    render() {
        return (
            <div className={styles.buttonBody}>
                <button className={styles.button} onClick={this.props.fetchData}>
                    <img src={diceButton} />
                </button>
            </div>
        );
    }
}

export default Button;
