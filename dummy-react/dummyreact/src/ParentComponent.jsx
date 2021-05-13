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

    greetParent(child){
        alert(`Hello ${this.state.greet} from ${child}`)
    }

    render (){
        return <div>
            <ChilComponent eventHandler = {this.greetParent}/>
        </div>
    }
}
export default ParentComponent