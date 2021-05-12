import React , {Component} from 'react';
import "./index.css";

class Destructuring extends Component{
    constructor(){
        super()
        this.state={
            name:"Reedam",
            surname:"Choudhary"
        }
    }
    render(){
        const {name, surname} = this.state;

        return <h1> Hey, {name} {surname} </h1>
    }
}

export default Destructuring