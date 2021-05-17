import React from 'react';
import WelcomePage from './WelcomePage'

class Forms extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username :"",
            comments : "",
            select : "react"
        }
        
    }

    inputHandler=(event)=>{
        this.setState({ 
            username : event.target.value
            
    },()=>console.log(this.state.username))
    }

    commentsHandler=event=>{
        this.setState(
            {
                comments : event.target.value
            }
        )
    }

    selectHandler=event=>{
        this.setState({
            select: event.target.value
        })
    }

    submitHandler=event=>{
        // alert(`Your user name is= ${this.state.username}\n You commented= ${this.state.comments} \n Topic you selected= ${this.state.select}`)
        <WelcomePage name={this.state.username}/>
        // event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                <label>User Name: </label>
                <input type="text" value={this.state.username} onChange={this.inputHandler}/><br /><br />
                <label>Comments: </label>
                <textarea value={this.state.comments} onChange={this.commentsHandler}></textarea><br /><br />
                <label>Topic: </label>
                <select value={this.state.select} onChange={this.selectHandler}>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                    <option value="js">Js</option>
                </select>
                <br /><br />
                <button type="submit">SUBMIT</button>

                </form>
            </div>
        )
    }
}

export default Forms