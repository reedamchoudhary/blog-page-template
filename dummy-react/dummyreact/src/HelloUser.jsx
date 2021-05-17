import {useState} from 'react'

const HelloUser = () => {

    const [name, setName] = useState("")

    const changeName = (event) => {
        setName(event.target.value)
        // console.log(name)
    }

    const [fullName, setFullName] = useState("");

    const onSubmit = (event) => {
        
        setFullName(name)
        console.log(fullName)
    }

    return(
        <div>
            <h1>Hello {fullName}</h1>
            <input placeholder="Enter you name" onChange = {changeName}/>
            <button onClick = {onSubmit}>Submit</button>
        </div>
    )
}

export default HelloUser