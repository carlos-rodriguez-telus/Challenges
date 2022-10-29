import { useState } from "react";
import Button from "../inputs/Button";

function ManagingEvents(){
    const [value, setValue] = useState(0);

    function increment(){
        setValue(value + 1);
    }

    function decrement(){
        setValue(value - 1);
    }

    return (
        <>
            Current Value: {value} <br/>
            <Button label = "Decrement" action = {decrement}/>
            <Button label = "Increment" action = {increment}/>
        </>
    );
}

export default ManagingEvents;