import './project.css'
import React, {useState} from 'react'
import Modal from "./Components/Modal.jsx";


export let actualModalInfo = {
    title: "",
    desc: "",
    img : "",
    moredesc : ""
};

function ProjectCard(props, {setModalOpen}) {


    return (
        <div id={"project-card-fond"} onClick={() => {
            console.log(props);
            actualModalInfo = props;
            props.setOpenModal(true);
        }}>
            <div className={"project-card-left"}>
                <img src={"img/"+props.img} alt={"Image du projet"}></img>

            </div>
            <div className={"project-card-right"}>
                <p>{props.title}</p>
                <span>{props.desc}</span>
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