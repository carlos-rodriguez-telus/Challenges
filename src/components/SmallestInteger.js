function SmallestInteger(props){
    let array = [...props.input];
    return <div>input: {"["+array.join(", ")+"]"} | output: {Math.min(...array)} </div>
}

export default SmallestInteger;