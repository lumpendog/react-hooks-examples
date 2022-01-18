import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const UseCallBackExample = () => {
    const [data, setData] = useState({ email: "" });
    const withoutUseCallback = useRef(0);
    const withUseCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // without useCallback
    const validateWithoutUseCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withoutUseCallback.current++;
    }, [validateWithoutUseCallback]);

    // with useCallback
    const validateWithUseCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withUseCallback.current++;
    }, [validateWithUseCallback]);

    useEffect(() => {
        validateWithoutUseCallback(data);
        validateWithUseCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider />
            <p>Render without useCallback: {withoutUseCallback.current}</p>
            <p>Render with useCallback: {withUseCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-cotrol"
                id="email"
                name="email"
                onChange={handleChange}
                value={data.email}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
