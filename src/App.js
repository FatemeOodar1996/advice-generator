import React from "react";
import { useState } from "react";
import Advice from "./components/adivce/Advice";
import Button from "./components/button/Button";
import { useEffect } from "react";

const App = () => {
    const [advice, setAdvice] = useState();

    const fetchData = async () => {
        await fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => {
                setAdvice(data.slip);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {advice && <Advice advice={advice} />}
            <Button fetchData={fetchData} />
        </div>
    );
};

export default App;
