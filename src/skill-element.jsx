import './skills.jsx'

function Skill(props) {


    return (
        <div id={"skill-one"}>
            <img src={"img/"+props.img} alt={"Image du projet"}></img>
            <h1>{props.title}</h1>
            <span>{props.text}</span>
        </div>

    )

}

export default Skill