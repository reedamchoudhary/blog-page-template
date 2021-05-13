import React from 'react';
import react from 'react';
import "./index.css"

class ConditionalRendering extends React.Component{
    constructor(){
        super();
        this.state = {
            inLoggedIn : true
        }
    }

    render(){
        //1. using if-else:-

        // if(this.state.inLoggedIn) return <h1>Hello Reedam</h1>
        // else return <h1>Hi Guest</h1>

        //2. using element variable:-
        // let message;
        // if(this.state.isLoggedIn) message = "Hello Reedam"
        // else message = "Hello Guest"
        // return (
        //     <h1>{message}</h1>
        // )

        //3. Using ternary operator:-

        // return(
        //     this.state.inLoggedIn ?
        //     <div>Hello Reedam</div> : 
        //     <div>Hello Guest</div>
        // )

        //4. short circuit operation :-
        return this.state.inLoggedIn && <div>Hello reedam</div>
    }
}

export default ConditionalRendering