import './project.css'

function ProjectCard(props) {


    return (
        <div id={"project-card-fond"}>
            <div className={"project-card-left"}>
                <img src={"img/"+props.img} alt={"Image du projet"}></img>

            </div>
            <div className={"project-card-right"}>
                <p>{props.desc}</p>
                <div className={"project-tags"}>
                {props.tags.map((item, index) => (
                <span className={"project-tag"} key={index}>{item.name}</span>
                ))}
                </div>
            </div>
        </div>

    )

}

export default ProjectCard