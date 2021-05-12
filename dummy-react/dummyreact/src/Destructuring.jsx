import React , {Component} from 'react';
import "./index.css";

const Destructuring = ({name, surname})=>{
    return(
        <div>
            <h1>Hi, {name} {surname}</h1>
        </div>
    )
}

export default Destructuring