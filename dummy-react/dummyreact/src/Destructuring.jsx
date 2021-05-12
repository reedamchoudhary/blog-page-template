import React , {Component} from 'react';
import "./index.css";

class Destructuring extends Component{
    render(){
        const {name, surname} = this.props
        return <h1> Hey, {name} {surname}</h1>
    }
}

export default Destructuring