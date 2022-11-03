import { useState, useEffect } from "react";

function SearchFilter({input}){
    let array = [...input];
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([...array]);
    
    function find(event){
        setSearch(event.target.value);
    }

    useEffect(()=>{
        setResult(array.filter((item) => item.includes(search)));
    },[search]);

    return (
      <div>
        <label>Search:</label>
        <br /> <input type="text" onChange={find} /> <br />
        <h3>Results:</h3>
            {result.map((item) => (
              <li key={item}> {item} </li>
            ))}
      </div>
    );
}

export default SearchFilter;