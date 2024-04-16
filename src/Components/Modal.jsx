import "./Modal.css";
import React, {useState} from "react";
import {actualModalInfo} from "../project-card.jsx";

function Modal({ setOpenModal }) {

    /*multiligne white-space: pre; avec \n*/

    return (
        <div className="modalBackground" onClick={() => {
            setOpenModal(false);
        }}>
            <div className="modalContainer" onClick={e => e.stopPropagation()}>
                <div className="titleCloseBtn">
                    <span>{actualModalInfo.title}</span>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="primary">
                    <img src={"img/"+actualModalInfo.img} alt={"Image du projet"}></img>
                    <span>{actualModalInfo.desc}</span>
                </div>
                {actualModalInfo.moredesc != null &&
                    <div className="secondary">
                        <p>Plus de détails :</p>
                        <p>{actualModalInfo.moredesc}</p>
                    </div>
                }
                <div className="footer">
                </div>
            </div>
        </div>
    );
}

export default Modal;