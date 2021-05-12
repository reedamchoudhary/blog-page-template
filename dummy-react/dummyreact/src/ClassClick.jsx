import React, {Component} from 'react'
import "./index.css"

class ClassClick extends Component{

     eventHandler=()=>{
        console.log("clickd!")
    }
    render(){
        return <button onClick = {this.eventHandler}>Click me!</button>
    }
}

export default ClassClick