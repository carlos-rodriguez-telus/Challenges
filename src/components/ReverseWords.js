import React from "react";

function ReverseWords(props){
    let input = String(props.input).split(" ");
    let output = [...input].reverse().join(" ");
    return <div> input: {props.input} | output: {output} </div>;
}

export default ReverseWords;