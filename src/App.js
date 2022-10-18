import React from "react";
import { useState } from "react";
import Advice from "./components/adivce/Advice";
import Button from "./components/button/Button";
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
            {advice && <Advice advice={advice} />}
          
            {/* <Button /> */}
            <Button fetchData={fetchData} />
        </div>
    );
};

export default App;
