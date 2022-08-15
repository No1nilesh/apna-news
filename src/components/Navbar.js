import React, {useState} from 'react'
import { Link } from "react-router-dom";

const NavBar = (props) => {


 

    return (
        <div>
            
            <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-${props.mode} style='color:white'`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Apna news</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                        </ul>
                        
                    </div>
                    <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="nav-item nav-link"  htmlFor="flexSwitchCheckDefault">{`${props.mode==="dark"?"Enable Light Mode":"Enable Dark Mode"}`}</label>
</div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar