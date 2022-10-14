import React from "react";
import { Link } from 'react-router-dom';

export default function Topo() {
    return (
      <header>
        <nav>
            <img src="../assets/logo.png" title="Gelateria" alt="logo da gelateria" />
            <Link className="opcao-Home" to='/'>Home</Link>
            <Link className="opcao-Sabores" to='/Sabores'>Sabores</Link>
            <Link className="opcao-Sobre" to='/Sobre'>Sobre</Link>
        </nav>

      </header>
    );
  }