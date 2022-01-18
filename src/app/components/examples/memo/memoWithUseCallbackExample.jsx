import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogoutButton = ({ onLogout }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogout}>
            Logout
        </button>
    );
};

LogoutButton.propTypes = {
    onLogout: PropTypes.func.isRequired
};

function areEqual(prevState, nextState) {
    if (prevState.onLogout !== nextState.onLogout) {
        return true;
    }
    return false;
}

const MemoizedLogoutButton = React.memo(LogoutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogout = useCallback(() => {
        localStorage.removeItem("auth");
    }, []);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                Initiate rerender
            </button>
            <MemoizedLogoutButton onLogout={handleLogout} />
        </>
    );
};

export default MemoWithUseCallbackExample;
