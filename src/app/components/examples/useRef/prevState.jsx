import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [someState, setSomeState] = useState("false");
    const toggleSomeState = () => {
        setSomeState((prevState) => (prevState === "false" ? "true" : "false"));
    };
    useEffect(() => {
        prevState.current = someState;
    }, [someState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Previous State: {prevState.current}</p>
            <p>Current State: {someState}</p>
            <button className="btn btn-primary" onClick={toggleSomeState}>
                Toggle some state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
