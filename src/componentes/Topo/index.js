import React from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
import './estilo.css';

export default function Topo() {
    return (
      <header className="secao-topo">
        <div className="limitar-secao">
            <div className="topo">  
              <img src="../assets/logo.png" title="Gelateria" alt="logo da gelateria" />
            </div>
            <nav className="topo-links"> 
              <Link className="opcao-link" to='/'>Home</Link>
              <Link className="opcao-link" to='/Sabores'>Sabores</Link>
              <Link className="opcao-link" to='/Sobre'>Sobre</Link>
            </nav> 
        </div>

      </header>
    );
  }