import React from "react";
// import GlobalStyle from "../globalStyles";
import { useState } from "react";
import GlobalStyle from "./globalStyles";
import Advice from "./components/adivce/advice";
import { useEffect } from "react";

const App = () => {
    const [advice, setAdvice] = useState();

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => {
                setAdvice(data.slip);
            });
    }, []);
    return (
        <div>
            <GlobalStyle />
            {advice && <Advice advice={advice} />}
        </div>
    );
};

export default App;
