import Skill from './skill-element.jsx'
import './skills.css'

function Skills_secondary() {

    return (

        <div className="skills-box">
                <Skill
                    img = "team.svg"
                    title = "Travail en Equipe"
                    text = ""
                />
                <Skill
                    img = "language.svg"
                    title = "Langues"
                    text = {'Français / Anglais \n(TOEIC B1)'}
                />
            <Skill
                img = "autonome.svg"
                title = "Autonomie"
                text = ""
            />

            </div>
    )

}

export default Skills_secondary