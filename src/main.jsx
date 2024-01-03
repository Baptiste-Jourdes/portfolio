import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Timeline from './timeline.jsx'
import Projects from './projects.jsx'
import Skills from './skills.jsx'
import NavBar from './navbar.jsx'
import { Separator, Title, SkillTitle } from './utils'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <div className="content">
      <Title text = "A Propos" anchor="apropos"/>
      <Separator/>
      <Title text = "Diplômes" anchor="diplomes"/>
      <Timeline />
      <Separator/>
      <Title text = "Projets" anchor="projets"/>
      <Projects />
      <Separator/>
      <Title text = "Compétences" anchor="competences"/>
      <SkillTitle text = "Principales"></SkillTitle>
      <Skills />
      <SkillTitle text = "Secondaires"></SkillTitle>
      <Skills />
    </div>
  </React.StrictMode>,
)


window.onload = (event) => {
  const URL = window.location.href;
  const id = URL.substring(URL.indexOf("#")+1);
    const yourElement = document.getElementById(id);
  if(yourElement!=null){
    console.log(yourElement)
    const y = yourElement.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({top: y-20, behavior: 'smooth'});
  }
  document.body.classList.add('loaded');

};

document.addEventListener("scroll", (event) => {

  const scrollPosition = window.scrollY;
  const sections = document.getElementsByClassName('AnchorSection');
  Array.from(sections).forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
        scrollPosition >= sectionTop - 50 && // Adjust the offset as needed
        scrollPosition < sectionTop + sectionHeight - 50 // Adjust the offset as needed
    ) {
      if(window.location.hash != ("#"+section.id)) {
          history.pushState({}, "", "#"+section.id) //set anchor without scroll
          console.log(section)
      }
    }
  });

});