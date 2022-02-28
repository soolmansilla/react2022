import React, { Component } from "react";
import "./recursos/css/tarjeta.css";



// const estilo1={
// width: "50%",
// border: "1px solid black"
// }

// const estilo2 ={
//   border: "1px solid red"
// }

class Tarjeta extends Component {
  state = {
    correo: this.props.correo,
    usuario: this.props.usuario,
    elemento: this.props.correo,
    mostrarCorreo: true,
  };

  cambiarElemento = () => {
    this.setState({
      elemento: this.state.mostrarCorreo
        ? this.state.usuario
        : this.props.correo,
      mostrarCorreo: !this.state.mostrarCorreo,
    });
  };

  render() {
    return (
      <div className={this.state.mostrarCorreo ? "tarjeta1" : "tarjeta2"}>
        <p> {this.state.elemento} </p>
        <button onClick={this.cambiarElemento}>
          Mostrar {this.state.mostrarCorreo ? "Usuario" : "Correo"}
        </button>
      </div>
    );
  }
}

export default Tarjeta;
