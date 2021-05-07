import {add, subtract, multiply, divide} from "./Calculator"

function App (){
  return (
    <>
    <ol>
    <li>The addition of 10 and 20 is {add(10,30)}</li>
    <li>The subtraction of 10 and 20 is {subtract(10,30)}</li>
    <li>The multiplication of 10 and 20 is {multiply(10,30)}</li>
    <li>The division of 10 and 20 is {divide(10,30)}</li>
    </ol>
    </>
  )
}

export default App;