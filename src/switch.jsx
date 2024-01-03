import React, {useEffect, useState} from 'react';
import './Switch.css';

const Switch = () => {
    function Update(event){
        console.log(document.documentElement.getAttribute("data-theme"));
        if(document.documentElement.getAttribute("data-theme")=="light"){
            document.documentElement.setAttribute("data-theme", "dark");
        }else{
            document.documentElement.setAttribute("data-theme", "light");
        }
        localStorage.setItem('dark-mode', document.documentElement.getAttribute("data-theme")=="dark");

    }

    const [dark, setDark] = useState(localStorage.getItem('dark-mode') === 'true');


    useEffect(() => {
        console.log("toggel")
        window.localStorage.setItem('dark-mode', JSON.stringify(dark));
        if(dark){
            document.documentElement.setAttribute("data-theme", "dark");
        }else{
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [dark]);

    return (
        <>
            <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
                //onChange = {Update}
                onChange = {() => {setDark(!dark); console.log(dark)}}
            />
            <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </>
    );
};

export default Switch;

