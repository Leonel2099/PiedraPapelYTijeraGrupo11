import React from 'react';
import Integrantes from './Integrantes.js';
import desarrolladores from '../components/json/desarrolladores.json'

function Desarrolladores() {

  return (
    <div className="desarrolladores">
        {
      desarrolladores.map((e)=> 
      <Integrantes 
      gitname={e.nombre}
      fullname={e.fullname}
      />)
    }
    </div>
  );
}

export default Desarrolladores;