import ProjectCard from './project-card'
import './project.css'

function Projects() {

    return (

        <div className="project-card-box">
                <ProjectCard
                    img = "projet1.png"
                    desc = "ETS - Montréal"
                    tags = {[{name: 'C'},{name:  'Javascript'},{name:  'Javascript'},{name:  'Javascript'}]}
                />
                <ProjectCard
                    img = "projet2.jpeg"
                    tags = {[{name: 'C'},{name:  'Javascript'}]}
                />
                <ProjectCard
                    img = "projet2.jpeg"
                    tags = {[{name: 'C'},{name:  'Javascript'}]}
                />
                <ProjectCard
                    img = "projet2.jpeg"
                    tags = {[{name: 'C'},{name:  'Javascript'}]}
                />



            </div>
    )

}

export default Projects