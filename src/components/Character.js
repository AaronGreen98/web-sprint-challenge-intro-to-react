// Write your Character component here
const Character = (props) => {
    return (
        <div className = 'starwars-people'>
            <h1>Starwars Character</h1>
            <h3> {props.firstName} </h3>
            <p>{props.birthYear}</p>

    </div>
    )
 }

 export default Character;