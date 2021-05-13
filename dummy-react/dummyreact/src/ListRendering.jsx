function ListRendering(){

    let names = ["Bruce", "Clark", "Diana"]
    function EventHandler(){
        return names.map(name => <li>{name}</li>)
    }
    return (
        <>
            <ul>
                <EventHandler />
            </ul>
            {/* <button onClick={eventHandler}></button> */}
        </>
    )
}

export default ListRendering