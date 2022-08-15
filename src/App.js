import React from "react";
import { useState } from "react";
import GlobalStyle from "./globalStyles";
import Advice from "./components/adivce/advice";
import Button from "./components/button/button";
import { useEffect } from "react";

const App = () => {
    const [advice, setAdvice] = useState();

    const fetchData = () => {
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => {
                setAdvice(data.slip);
            });
    };

    return (
        <div>
            <GlobalStyle />
            {advice && <Advice advice={advice} />}
            <Button fetchData={fetchData} />
        </div>
    );
};

export default App;
