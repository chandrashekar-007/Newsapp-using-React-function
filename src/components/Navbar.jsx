import React ,{useContext,useRef}  from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from './context/Context';

const Navbar = () => {
  const {setCategory} = useContext(AppContext);
  const closeBtn = useRef(null);

  const clickedFunc=(e)=>{
    closeBtn.current.click()
    const category=e.target.innerText.toLowerCase();
    setCategory(`${category}`)
  }
  const clickFunc = ({isActive})=>{

    return{
      color: isActive?'yellow':'white',
      fontWeight: isActive?'900':'normal',
      tranform: isActive? 'translateY(20)':'none',
    }
    
  }
    return (
      <nav className="navbar fixed-top navbar-expand-lg " style={
        {backgroundColor: '#8757e6'}}>
        <div className="container-fluid" >
          <NavLink className="navbar-brand active" style={{ paddingRight: '50px'}} to="/">
            SK News <span>- A News Website</span>
          </NavLink>
          <button
          ref={closeBtn}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent"><hr/>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">          
              <li className="nav-item" onClick={(e)=>clickedFunc(e)}>
                <NavLink className="nav-link" onClick={clickFunc} to="/general">
                General
                </NavLink>
              </li>
              <li className="nav-item" onClick={(e)=>clickedFunc(e)}>
                <NavLink className="nav-link" onClick={clickFunc} to="/health">
                Health
                </NavLink>
              </li>
              <li className="nav-item" onClick={(e)=>clickedFunc(e)}>
                <NavLink className="nav-link" onClick={clickFunc} to="/sports">
                Sports
                </NavLink>
              </li>
              <li className="nav-item" onClick={(e)=>clickedFunc(e)}>
                <NavLink className="nav-link" onClick={clickFunc} to="/business">
                Business
                </NavLink>
              </li>
              <li className="nav-item" onClick={(e)=>clickedFunc(e)}>
                <NavLink className="nav-link" onClick={clickFunc} to="/entertainment">
                Entertainment
                </NavLink>
              </li>
              <li className="nav-item" onClick={(e)=>clickedFunc(e)}>
                <NavLink className="nav-link" onClick={clickFunc} to="/science">
                Science
                </NavLink>
              </li>
              <li className="nav-item" onClick={(e)=>clickedFunc(e)}>
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