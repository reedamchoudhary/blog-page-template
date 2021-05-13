import React from 'react';
import "./index.css";
import ChilComponent from './ChilComponent'

class ParentComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            greet : "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert(`Hello ${this.state.greet}`)
    }

    render (){
        return <div>
            <ChilComponent eventHandler = {this.greetParent}/>
        </div>
    }
}
export default ParentComponent