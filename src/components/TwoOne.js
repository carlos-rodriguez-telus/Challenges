function TwoOne({s1, s2}){
    let arrayA = String(s1).split("");
    let arrayB = String(s2).split("");
    let map = {};
    let output = [];    
    arrayA.forEach((letter)=>{map[letter]=0});
    arrayB.forEach((letter)=>{map[letter]=0});

    for(let k in map){
        output.push(k);
    }

    return(
        <div>
            longest(s1,s2) = "{output.sort().join("")}"
        </div>
    ); 
}

export default TwoOne;