import './skills_primary.jsx'

import { ReactSVG } from "react-svg";

function Skill(props) {


    return (
        <div id={"skill-one"}>
            <ReactSVG src={"img/competence/"+props.img} alt={"Image du projet"} beforeInjection={(svg) => {
                svg.setAttribute('fill', 'currentColor')
            }}></ReactSVG>
            <h1>{props.title}</h1>
            <span>{props.text}</span>
        </div>

    )

}

export default Skill