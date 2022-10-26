import React from "react";

function EnsureQuestion (props) {
    let input = props.input;
    let output = input[input.length-1]==="?"?input:input+"?";
    return <div> input: "{input}" | output: "{output}" </div>;
}

export default EnsureQuestion;