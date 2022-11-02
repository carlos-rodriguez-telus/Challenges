import { useState } from "react";

function WishList(){
    const[data,setData] = useState({name:"", wish:"", priority:"1"});

    function handleSubmit(event){
        console.log("Submitted!");
        console.table(data);
        event.preventDefault();
    }
    
    function updateName(event){
        setData(data => {
            return {...data, name:event.target.value}
        });
    }
    function updateWish(event){
        setData(data => {
            return {...data, wish:event.target.value}
        });
    }
    function updatePriority(event){
        setData(data => {
            return {...data, priority:event.target.value}
        });
    }

    return(
    <div>        
        <form onSubmit={handleSubmit}>
            <label>Child's name</label>
            <br/>
            <input id="name" type="text" onChange={updateName}/>
            <br/>

            <label>Child's Wish</label>
            <br/>
            <textarea id="wish" onChange={updateWish}/>
            <br/>

            <label>Wish Priority</label><br/>
            <select id="priority" style={{marginBottom:"5px"}} onChange={updatePriority} select="1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select><br/>
            
            <input type="submit" value="Submit"/>
        </form>
    </div>
    );
}

export default WishList;