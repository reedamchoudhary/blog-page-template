import React from 'react';
import react from 'react';
import "./index.css"

class ConditionalRendering extends React.Component{
    constructor(){
        super();
        this.state = {
            inLoggedIn : false
        }
    }

    render(){
        if(this.state.inLoggedIn) return <h1>Hello Reedam</h1>
        else return <h1>Hi Guest</h1>
    }
}

export default ConditionalRendering