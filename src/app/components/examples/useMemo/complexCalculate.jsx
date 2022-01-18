import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(num) {
    return num ? num * factorial(num - 1) : 1;
}

function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [someState, setSomeState] = useState(false);
    const fact = useMemo(() => runFactorial(value), [value]);

    useEffect(() => {
        console.log("render");
    });

    const handleIncrement = () => {
        setValue(value + 10);
    };
    const handleDecrement = () => {
        setValue(value - 10);
    };
    const toggleSomeState = () => {
        setSomeState(!someState);
    };

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>
                    {value}! = {fact}
                </p>
                <button
                    className="btn btn-primary mx-2"
                    onClick={handleIncrement}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={handleDecrement}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className="btn btn-primary mx-2"
                    onClick={toggleSomeState}
                >
                    Toggle some State
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
