import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [someState, setSomeState] = useState(false);
    const toggleSomeState = () => {
        setSomeState(!someState);
    };
    useEffect(() => {
        renderCount.current++;
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>Количество рендеров: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleSomeState}>
                Toggle some state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
