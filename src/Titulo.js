import React from "react";


function Titulo(props) {
  return (
    <div>
      <h1> {props.titulo} </h1>
      <h2>{props.subtitulo}</h2>
      <p>{props.parrafo} </p>

    </div>
  );
}

export default Titulo;
