import React from 'react';
import { NavLink } from "react-router-dom";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {FaSearch} from 'react-icons/fa'

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink end className="nav-link" aria-current="page" to="/">FORSIDE</NavLink>
            </li>
            <li className="nav-item">
              <NavLink end className="nav-link" aria-current="page" to="/aboutus">OM OS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink end className="nav-link" aria-current="page" to="/service">SERVICE</NavLink>
            </li>
            <li className="nav-item">
              <NavLink end className="nav-link" aria-current="page" to="/faq">FAQ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink end className="nav-link" aria-current="page" to="/news">NYHEDER</NavLink>
            </li>
            <li className="nav-item">
              <NavLink end className="nav-link" aria-current="page" to="/contact">KONTAKT OS</NavLink>
            </li>
            <form class="d-flex has-search" role="search">
              <input class="form-control me-2" type="search" placeholder="Søg" aria-label="Search"/>
              <span className='form-control-feedback'><FaSearch/></span>
            </form>

          </ul>
        </div> {/* END NAVBAR CONTAINER */}
      </div>  {/* END OVERALL CONTAINER */}
    </nav>
  )
}

export default Navbar;