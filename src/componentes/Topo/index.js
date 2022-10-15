import { Link } from 'react-router-dom';
import './estilo.css';

export default function Topo() {
    return (
      <header>
          <div className="limitar-secao">  
            <img src="../assets/logo.png" title="Gelateria" alt="logo da gelateria" />
            <nav className="topo-links"> 
              <Link className="link-topo" to='/'>Home</Link>
              <Link className="link-topo" to='/Sabores'>Sabores</Link>
              <Link className="link-topo" to='/Sobre'>Sobre</Link>
            </nav> 
          </div>
      </header>
    );
  }