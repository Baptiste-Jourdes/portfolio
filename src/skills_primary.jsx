import Skill from './skill-element.jsx'
import './skills.css'

function Skills_primary() {

    return (

        <div className="skills-box">
                <Skill
                    img = "embarque.svg"
                    title = "Développement embarqué"
                    text = "C pour l'embarqué (HAL et LL)"
                />
                <Skill
                    img = "system.svg"
                    title = "Systèmes"
                    text = "Windows / Linux (Raspbian, Debian, Ubuntu)"
                />
            <Skill
                img = "git.svg"
                title = "Projet Collaboratif"
                text = "Git / Github / GitLab"
            />
                <Skill
                    img = "printed.svg"
                    title = "Circuit imprimé (PCB)"
                    text = "Lecture de schéma / Conception / Réalisation"
                />
            <Skill
                img = "dev.svg"
                title = "Développement global"
                text = "Java / SQL / HTML / JS / CSS / PHP / React"
            />
            <Skill
                img = "dev.svg"
                title = "Environnements de développement"
                text = "Atmel Studio (AVR) / CubeMX IDE (ARM) / IntelliJ / VScode / Eclipse IDE"
            />

            </div>
    )

}

export default Skills_primary