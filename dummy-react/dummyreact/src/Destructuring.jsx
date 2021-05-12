import React , {Component} from 'react';
import "./index.css";

const Destructuring = props=>{

    const {name, surname} = props
    return(
        <div>
            <h1>Hi, {name} {surname}</h1>
        </div>
    )
}

export default Destructuring