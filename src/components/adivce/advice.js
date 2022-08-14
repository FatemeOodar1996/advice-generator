import React from "react";
import divider from "../../assets/images/pattern-divider-desktop.svg";

const Advice = ({ advice }) => (
    <div>
        <h1>{advice.id}</h1>
        <p>{advice.advice}</p>
        <img src={divider} />
    </div>
);

export default Advice;
