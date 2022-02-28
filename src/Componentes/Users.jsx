import React, { Component } from "react";
import users from "../recursos/users.json";
import Tarjeta from "../Tarjeta";

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: users,
    };
  }

  render() {
    return (
      <div>
        {this.state.usuario.map(e => (
            <div key={e.id}>
          <Tarjeta correo={e.email} usuario={e.name} />
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
