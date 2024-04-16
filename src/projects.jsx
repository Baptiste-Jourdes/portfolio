import ProjectCard from './project-card'
import './project.css'

function Projects({ setOpenModal }) {
    console.log(setOpenModal);
    return (

        <div className="project-card-box">
                <ProjectCard
                    img = "arduino.jpg"
                    title = "Création d'une carte arduino Leonardo"
                    desc = "Ce projet académique consistait à la création d'une carte arduino Leonardo, de la conception du shéma jusqu'à la réalisation et la programmation"
                    tags = {[{name: 'C'},{name: 'LL'},{name:  'Kicad'}]}
                    setOpenModal = {setOpenModal}
                    moredesc = {"La conception du schéma et du PCB a été réalisé avec le logiciel Kicad.\nLa réalisation de cette carte électronique a permis d'apprendre à souder des composants traversants et montés en surface (CMS).\nLa programmation a été réalisé en programmation bas niveau LL (Low Layer)"}
                />
                <ProjectCard
                    img = "escape.jpg"
                    title = "Création d'un escape game informatique"
                    desc = "Ce projet académique consistait à la réalisation un escape game sur le thème de l'informatique à destination de jeunes. L'objectif était de leurs faire découvrir les possibilités de l'informatique (programmation, binaire, porte logique...)"
                    tags = {[{name: 'Arduino'},{name:  'Kicad'}]}
                    setOpenModal = {setOpenModal}
                    moredesc = {"Ce projet a demandé la création de nombreuses cartes électroniques placées sous forme de shield sur des cartes arduino mega.\nIl a été conclu avec succès par 2 journées de présentation de l'informatique en général auprès de 2 classes d'adolescents."}
                />
                <ProjectCard
                    img = "robot.jpg"
                    title = "Réalité augmentée sur une carte de visite"
                    desc = "Ce projet académique consistait à la conception d'une application utilisant de la réalité augmenté basé sur une carte de visite"
                    tags = {[{name: 'Unity'}]}
                    setOpenModal = {setOpenModal}
                    moredesc = {"Notre application permet à l’utilisateur de présenter un produit en le faisant apparaître en réalité augmentée depuis sa carte de visite. L’autre côté de la carte fait apparaître en 3D l’employé qui se présente via différentes questions interactives préconçues par l’utilisateur.\n\n Les principales tâches ont été :\n" +
                        "   ◦ Créer une application de réalité augmentée\n" +
                        "   ◦ Reconnaitre un logo/élément dans une image\n" +
                        "   ◦ Modéliser un avatar 3D\n" +
                        "   ◦ Créer des animations\n"}
                />
                <ProjectCard
                    img = "garage.jpg"
                    title = "Domotisation d'un Garage"
                    desc = "Ce projet personnel consistait en la domotisation d'un garage familial avec la mise en place d'un assistant vocal entièrement en local"
                    tags = {[{name: 'Raspberry'},{name:  'Python'},{name:  'Shell script'}]}
                    setOpenModal = {setOpenModal}
                    moredesc = {"Lors de ce projet, j'ai conçu et programmé un box domotique (sur une base de raspberry 3A+) autonome avec un assistant vocal intégré. L'assistant peut être réveillé avec le mot clé choisi par l'utilisateur et permet de faire différentes tâches comme l'allumage d'éclairage.\nCe projet a essentiellement été réalisé en python et en shell."}
                />
                <ProjectCard
                    img = "stm.png"
                    title = "Projet sur une carte de développement STM32"
                    desc = "Ce projet académique consistait à la réalisation d'un petit projet sur une carte de développement STM32. L'objectif était de prendre en main une carte STM32 avec le logiciel STM32Cube IDE et la programmation HAL (Hardware Abstraction Layer)"
                    tags = {[{name: 'STM32'},{name: 'HAL'},{name:  'C'}]}
                    setOpenModal = {setOpenModal}
                />
                <ProjectCard
                    img = "micro.jpg"
                    title = "Réalisation de résistance en microélectronique"
                    desc = "Ce projet académique consistait à la réalisation d'une photolithographie en salle blanche afin de créer des résistances en microélectronique"
                    tags = {[{name: 'microélectronique'}]}
                    setOpenModal = {setOpenModal}
                    moredesc = {"La réalisation d'une photolithographie permet de réaliser des composants de microélectronique, à l'air de la miniaturisation, la microélectronique devient très importante et très utilisé.\nCette technique nécéssite une grande vigilance afin d'éffectuer l'ensemble des étapes nécéssaires"}
                />
            <ProjectCard
                img = "KNX.jpg"
                title = "Pilotage et supervision domotique en
            technologie KNX"
                desc = "Ce projet académique consistait à la création d'une maquette de travaux pratique sur la domotique KNX simulant divers appareils comme des interrupteurs, des télécommandes RF, des lumières ect"
                tags = {[{name: 'domotique'}]}
                setOpenModal = {setOpenModal}
            />


            </div>
    )

}

export default Projects