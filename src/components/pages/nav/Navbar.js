import React from "react";
import {Link} from 'react-router-dom'
import '../../styles/Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-bold" style={{fontSize:18, padding:20}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-currency-dollar"></i>
            Dollars Exchanger
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav"></ul>
            <div className="navbar-nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">
                        Accueil
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/acheteur">
                            Acheteur
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/vendeur">
                            Vendeur
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/apropos">A propos</Link>
                    </li>
                </ul>
                
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
