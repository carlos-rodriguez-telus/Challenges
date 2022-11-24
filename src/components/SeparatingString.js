function SeparatingString({input}){

    let array = String(input).split(" ");
    let len = 0;
    
    array.forEach((item) => { if(len<item.length) len = item.length });

    let newArray = array.map((item)=>item.split(""));
    newArray.forEach((item)=>{
        for (let i = 0; i < len; i++) {
            if(item[i]==undefined) item[i] = "' '";            
        }
    });

    let result = newArray[0].map((col, i) => newArray.map(row => row[i])) ;

    result = result.map((item)=>{ 
        return <li key={item}> {item.join(", ")} </li>
    }); 

    return(
        <div>
            Input:<br/>{input}<br/>
            Output:
            <ul>
                {result}            
            </ul>
        </div>
    );
}

export default SeparatingString;