function WellOfIdeas(props){
    let input = [...props.input];
    let result = input.filter(item => item === "good");

    if(result.length === 1 || result.length === 2){
        return <div>input "{input.toString()}" | Publish!</div>;
    }else if(result.length >= 3){
        return <div>input "{input.toString()}" | I smell a series!!!</div>;
    }else{
        return <div>input "{input.toString()}" | Fail!</div>;
    }
}

export default WellOfIdeas;