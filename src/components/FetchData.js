import { useState } from "react";

function FetchData(){

    const[user, setUser] = useState({});

    async function getUser(id){
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        const response = await fetch(url);
        const newUser = response.json()
        return newUser;
    }

    function fetchUser(id){
        getUser(id).then((response)=> { setUser(response) });
    }

    function reset(){
        fetchUser(Math.trunc(Math.random()*10));
    }
    
    return (
      <div>
        <button onClick={ reset }>Reset</button>
        <br/> 
        <h3>User Data:</h3>
        <label>Name: {user?.name }</label> <br/>
        <label>Website: {user?.website }</label><br/>
        <label>Email: {user?.email }</label><br/>
        <label>Phone: {user?.phone }</label>
      </div>
    );
}

export default FetchData;