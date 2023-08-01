import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const clickFunc = ({isActive})=>{
    return{

      color: isActive?'grey':'white',
      fontWeight: isActive?'900':'normal',
      tranform: isActive? 'translateY(20)':'none',

      
    }

  }


    return (
      <nav className="navbar fixed-top navbar-expand-lg" style={
        {backgroundColor: '#8757e6'}}>
        <div className="container-fluid" style={{height:"55px "}}>
          <NavLink className="navbar-brand active" style={{ paddingRight: '50px'}} to="/">
            SK News - A News Website
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " onClick={clickFunc} aria-current="page" to="/">
                  Home
                </NavLink>
              </li>           
              <li className="nav-item">
                <NavLink className="nav-link" onClick={clickFunc} to="/general">
                General
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={clickFunc} to="/health">
                Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={clickFunc} to="sports/">
                Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={clickFunc} to="/business">
                Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={clickFunc} to="/entertainment">
                Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={clickFunc} to="/science">
                Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={clickFunc} to="/technology">
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar









