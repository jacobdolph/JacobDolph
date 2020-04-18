import React from "react";


function Wrapper(props) {
    return <div style={{ margin: "1rem", backgroundColor: "white" }} className="wrapper">{props.children}</div>;
}

export default Wrapper;
