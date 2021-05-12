import React, {Component} from 'react';
// import './index.css';

// class Counter extends Component{

//     constructor(){
//         super();
//         this.state = {
//             count: 0
//         }
//     }

//     increment (){
//         this.setState(
//             {
//                 count : this.state.count+1
//             }
//         )
//     }


//     render(){
//         return( 
//             <div>
//         <h1>Counter :- {this.state.count}</h1>
//         <button onClick = {this.increment}>Increment</button>
//         </div>
//         )
//     }
// }

// export default Counter

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true, count:0};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        count :this.state.count+1
      }));
    }
  
    render() {
      return (
          <div>
          <h1>Count= {this.state.count}</h1>
        <button onClick={()=>this.handleClick()}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        </div>
      );
    }
  }

  export default Counter