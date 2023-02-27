import React from 'react';
import rigo from '../img/rigo-baby.jpg';

const data = {
  titulo: 'Some Tittle',
  texto:'Some quick example text to build on the card title and make up the bulk of the cards content.',
  buttom: 'Go SomeWhere'

}

const Cardpage = () => {

  return (
    
    <div className="card">
      <img src={rigo} whi className="card-img-top w-60" alt="imagen"/>
      <div className="card-body">
        <h5 className="card-title">{data.titulo}</h5>
        <p className="card-text">{data.texto}</p>
        <a href="#" className="btn btn-primary">{data.buttom}</a>
      </div>
    </div>

  );
}

export default Cardpage;