import React from "react";

function OddOrEven(props){
    let array = [...props.input];
    let total = array.reduce((a,b) => a+b);
    return <div>input: {"["+array.join(", ")+"]"} | output: {total%2?"odd":"even"}</div>
}

export default OddOrEven;