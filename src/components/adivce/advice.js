import React from "react";
import divider from "../../assets/images/pattern-divider-desktop.svg";
import styles from "./Advice.module.css";

const Advice = ({ advice }) => (
    <div className="container">
        <div className={`row-cols-4 ${styles.adviceBody}`}>
            <div className={`col ${styles.advice}`}>
                <h1 className={styles.number}>ADVICE #{advice.id}</h1>
                <p className={styles.text}>{advice.advice}</p>
                <img src={divider} className={styles.image} />
            </div>
        </div>
    </div>
);

export default Advice;
