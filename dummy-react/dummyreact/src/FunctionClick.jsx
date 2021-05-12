import "./index.css"

const FunctionClick = () => {
     const eventHandler = ()=>{
        console.log("clicked!")
    }
    return(
        <div>
            <button onClick = {eventHandler}>Click Me</button>
        </div>
    )
}
export default FunctionClick