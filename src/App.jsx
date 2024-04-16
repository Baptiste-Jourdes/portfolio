import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BJLogo from './assets/logoBJ.png'
import NavBar from "./navbar.jsx";
import {Separator, SkillTitle, Title} from "./utils.jsx";
import Apropos from "./apropos.jsx";
import Timeline from "./timeline.jsx";
import Projects from "./projects.jsx";
import {actualModalInfo} from "./project-card.jsx";
import Skills_primary from "./skills_primary.jsx";
import Skills_secondary from "./skills_secondary.jsx";
import Modal from "./Components/Modal.jsx";
import './index.css'

function App() {
    const [modalOpen, setModalOpen] = useState(false);

  return (
<>
      <NavBar className={"content " + (modalOpen ? 'ModalOpen' : '')}/>
    <div className={"content " + (modalOpen ? 'ModalOpen' : '')}>
        <Title text = "A Propos" anchor="apropos"/>
        <Apropos></Apropos>
        <Separator/>
        <Title text = "Formations" anchor="formations"/>
        <Timeline />
        <Separator/>
        <Title text = "Projets" anchor="projets"/>
        <Projects setOpenModal = {setModalOpen}/>
        <Separator/>
        <Title text = "Compétences" anchor="competences"/>
        <SkillTitle text = "Principales"></SkillTitle>
        <Skills_primary />
        <SkillTitle text = "Secondaires"></SkillTitle>
        <Skills_secondary />
    </div>
    {modalOpen && <Modal props={actualModalInfo} setOpenModal={setModalOpen} />}
</>
  )
}

export default App
