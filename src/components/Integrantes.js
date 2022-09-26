import React from "react";
import iconGit from '../assets/icons/icon-github.png'
function Integrantes(props){
    return(
        <div className="profile">
            <div className="gitname">{props.gitname}</div>
            <div className="fullname">Alumno: {props.fullname}</div>
            <img className="imagen" src={iconGit}/>
        </div>
    )
}

export default Integrantes;