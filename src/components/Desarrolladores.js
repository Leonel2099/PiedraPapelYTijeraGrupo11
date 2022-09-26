import React from 'react';
import Integrantes from './Integrantes.js';
function Desarrolladores() {
  const listaIntegrantes = [
    {
      gitname: "Nadssnchez",
      img: "https://digimon.shadowsmith.com/img/a...",
      fullname: "Nadia Rosario Sanchez"
    },
    {
      gitname: "Fernando29Velasquez",
      img: "https://digimon.shadowsmith.com/img/g...",
      fullname: "Lucas Jose Fernando Velasquez"
    },
    {
      gitname:"Facubra",
      img:"https://digimon.shadowsmith.com/img/b...",
      fullname: "Facundo Jose Luis Brajeda"
    },
    {
      gitname: "Leonel2099",
      img: "https://digimon.shadowsmith.com/img/t...",
      fullname: "Leonel Ezequiel Choque"
    },
    {
      gitname: "Arielsagrero",
      img: "https://digimon.shadowsmith.com/img/p...",
      fullname: "Nelson Ariel Sagrero"
    },
    {
      gitname: "Joavscript",
      img: "https://digimon.shadowsmith.com/img/g...",
      fullname: "Emmanuel Joaquin Villegas"
    },
]

  return (
    <div className="desarrolladores">
        {
      Integrantes.map((e)=> 
      <Integrantes 
      gitname={e.nombre}
      fullname={e.fullname}
      imagen={e.img}
      />)
    }
    </div>
  );
}

export default Desarrolladores;