import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        // We have an element in inputRef.current to work with
        console.log(inputRef.current);
        inputRef.current.focus();
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-cotrol"
                id="email"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                Focus input
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
