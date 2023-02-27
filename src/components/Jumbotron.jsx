import React from "react";
import  '../styles/Jumbotron.css';
const data ={
    titulo:"A Warm Welcome!",
    contenido:"Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking",
    boton:"Call to action!"
}
const Jumbotron =() =>{
    return(
       <>
        <div className="container mb-2 my-0">
        <h1 class="d-flex">{data.titulo}</h1>
        <p>{data.contenido}</p><button class="btn btn-primary btn-lg mb-5" type="button">{data.boton}</button>
        </div>
        </>

    )
}

export default Jumbotron