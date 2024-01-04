import './navbar.css'
import linkedinLogo from './assets/linkedin.svg'
import gitLogo from './assets/github.svg'
import CV from '/CV_JOURDES_Baptiste.pdf'

import { NavSeparator } from './utils'
import Switch from "./switch.jsx";
import { useState, useEffect  } from 'react';

function NavBar() {

    const linkedin = "https://linkedin.com/in/baptiste-jourdes/";
    const CV = "Télécharger CV";
    const github = "https://github.com/Baptiste-Jourdes";
    const mail = "baptiste.jourdes.24@gmail.com";

    const [dark, setDark] = useState(localStorage.getItem('dark-mode') === 'true');


    useEffect(() => {
        window.localStorage.setItem('dark-mode', JSON.stringify(dark));
    }, [dark]);


    return (

        <div className="Navbar">
            <p id="name">JOURDES <br></br>Baptiste</p>

            <p id="resume">Actuellement étudiant en double-diplôme à la maîtrise en génie logiciel spécialisé dans les systèmes embarqués</p>

            <div className="contact">
                <button className="circle" title={linkedin} onClick={() => {window.open(linkedin);}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                    <path d="M10.4597 23.0028V11.531H6.81559V23.0028H10.4597ZM8.63812 9.96383C9.9089 9.96383 10.6999 9.08293 10.6999 7.9821C10.6762 6.85645 9.90895 6 8.66224 6C7.41573 6 6.60059 6.85646 6.60059 7.9821C6.60059 9.08298 7.39139 9.96383 8.61434 9.96383H8.63801H8.63812ZM12.4767 23.0028H16.1209V16.5964C16.1209 16.2535 16.1445 15.911 16.2408 15.6659C16.5042 14.9809 17.1038 14.2714 18.1105 14.2714C19.4291 14.2714 19.9567 15.3234 19.9567 16.8656V23.0027H23.6006V16.4249C23.6006 12.9012 21.8028 11.2617 19.4051 11.2617C17.4393 11.2617 16.5761 12.4115 16.0966 13.1946H16.1209V11.5308H12.4768C12.5246 12.6072 12.4768 23.0026 12.4768 23.0026L12.4767 23.0028Z"/>
                    </svg>
                    </button>
                <button title={CV} onClick={() => {window.open("CV_JOURDES_Baptiste.pdf");}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                    <path d="M5.79883 24H23.7988V21.8824H5.79883V24ZM23.7988 12.3529H18.656V6H10.9417V12.3529H5.79883L14.7988 19.7647L23.7988 12.3529Z"/>
                    </svg>
                    <span>CV</span></button>
                <button className="circle" title={github} onClick={() => {window.open(github);}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                    <g clipPath="url(#clip0_20_182)">
                    <path d="M19.4831 7.37645C17.2958 6.8682 15.0211 6.8682 12.8338 7.37645C11.5706 6.60166 10.6061 6.24557 9.90465 6.09527C9.60528 6.0277 9.29895 5.99587 8.99208 6.00043C8.85244 6.00421 8.71347 6.02099 8.57694 6.05053L8.55905 6.05411L8.55189 6.05769H8.54652L8.79167 6.91837L8.54652 6.05948C8.42081 6.095 8.30441 6.15763 8.20549 6.24295C8.10656 6.32827 8.02753 6.43421 7.97393 6.55334C7.44602 7.73559 7.34544 9.06457 7.68942 10.3128C6.79856 11.3924 6.31308 12.7495 6.31697 14.1492C6.31697 16.9281 7.1365 18.7962 8.534 19.9969C9.51278 20.8379 10.7009 21.2852 11.8926 21.5411C11.7051 22.0919 11.6344 22.6757 11.6851 23.2553V24.3253C10.9568 24.4774 10.4522 24.4291 10.0925 24.311C9.6434 24.1625 9.29806 23.8637 8.96702 23.4342C8.79398 23.2027 8.63273 22.9627 8.4839 22.7149L8.3819 22.5485C8.25311 22.3343 8.11947 22.1231 7.98108 21.9151C7.6411 21.4122 7.1365 20.7824 6.32055 20.5677L5.4545 20.3404L5 22.0725L5.86605 22.2998C6.0092 22.3356 6.1953 22.4698 6.50128 22.9189C6.61905 23.0962 6.73241 23.2764 6.84126 23.4593L6.96293 23.6561C7.13113 23.9281 7.32439 24.2287 7.54806 24.5222C8.00077 25.1126 8.6181 25.7085 9.53425 26.0109C10.1605 26.2185 10.8727 26.2686 11.6851 26.1433V29.4841C11.6851 29.7214 11.7793 29.9489 11.9471 30.1167C12.1149 30.2845 12.3425 30.3788 12.5798 30.3788H19.7372C19.9745 30.3788 20.2021 30.2845 20.3699 30.1167C20.5376 29.9489 20.6319 29.7214 20.6319 29.4841V23.1086C20.6319 22.5449 20.6069 22.0278 20.4476 21.5464C21.6339 21.2959 22.8131 20.8486 23.7866 20.0076C25.1823 18.798 26 16.912 26 14.117V14.1152C25.9955 12.7269 25.5098 11.3832 24.6258 10.3128C24.9693 9.06513 24.8687 7.73686 24.3413 6.55513C24.2881 6.43586 24.2094 6.32968 24.1108 6.24406C24.0122 6.15843 23.896 6.09543 23.7704 6.05948L23.5253 6.91837C23.7704 6.05948 23.7687 6.05948 23.7669 6.05948L23.7633 6.05769L23.7561 6.05411L23.74 6.05053C23.6958 6.03904 23.651 6.03008 23.6058 6.02369C23.5122 6.01002 23.4177 6.00225 23.3231 6.00043C23.0162 5.9959 22.7099 6.02773 22.4105 6.09527C21.7109 6.24557 20.7464 6.60166 19.4831 7.37645Z"/>
                    </g>
                    </svg>

                    </button>
            </div>

            <NavSeparator/>

            <div id={"title"}>
                <a href={"#apropos"}>A Propos</a>
                <a href={"#formations"}>Formations</a>
                <a href={"#projets"}>Projets</a>
                <a href={"#competences"}>Compétences</a>
            </div>

            <button id={"contact"} title={mail} onClick={() => window.location = 'mailto:'+mail}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span id={"contact"}>Contactez moi</span>
            </button>

            <NavSeparator/>
            <span className={"nav-mode"}>Dark mode</span>
            <div className={"nav-mode"}>
            <Switch
                isOn={dark}
                onColor="#EF476F"
                onClick={() => {setDark(!dark); console.log(dark)}}
            />
            </div>

            <div>langue</div>

        </div>

    )

}

export default NavBar