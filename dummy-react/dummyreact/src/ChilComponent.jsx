function ChilComponent(props){
    return <button onClick = {()=>props.eventHandler('child')}>Greet</button>
}

export default ChilComponent