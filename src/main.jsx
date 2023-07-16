import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Timeline from './timeline.jsx'
import TimelineCard from './timeline.jsx'
import NavBar from './navbar.jsx'
import { Separator, NavSeparator, Title } from './utils'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <div class="content">
      <Title text = "A Propos" anchor="apropos"/>
      <Separator/>
      <Title text = "Diplômes" anchor="diplomes"/>
      <Timeline />
      <Separator/>
      <Title text = "Projets" anchor="projets"/>
    </div>
  </React.StrictMode>,
)

window.onload = (event) => {
  const URL = window.location.href;
  const id = URL.substring(URL.indexOf("#")+1);
  if(id==null){
    const yourElement = document.getElementById(id);
    console.log(yourElement)
    const y = yourElement.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({top: y-20, behavior: 'smooth'});
  }
};