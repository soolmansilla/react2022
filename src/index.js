import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Componentes/Users';
import Tarjeta from './Tarjeta';
import Titulo from './Titulo';




ReactDOM.render(
  <React.StrictMode>
  <Titulo titulo ="soy el titulo" sbutitulo ="subtitulo blabla" parrafo="skfjdskfjsdlfksdjfksdjf"/>
     <Users/> 
{/*
    <Titulo titulo="Fundacion" subtitulo="TRILOGIA ASIMOV" parrafo="Todo comienza en trantor..."/>
    <Titulo titulo="Cien años de Soledad" subtitulo="GG MARQUES" parrafo="Todo comienza en Colombia..."/>
    <Tarjeta descripcion = "Octavio Robleto" usuario="orobleto" correo="octavio.robleto@gmail.com"/>  
    <Tarjeta descripcion = "Nicolas Borsari" usuario="nborsari" correo="nicolas.borsari@gmail.com"/>  

*/}

{/* <Tarjeta correo="aanaih@gmail.com" usuario="amansilla" /> */}
  </React.StrictMode>

  ,

  document.getElementById('root')
);

