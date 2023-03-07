import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const handleChange = (event) => {
    props.toggleColor(event.target.value)
  }
  return (
    <>
    <div className= {`text-${props.mode==='light'?'dark':'light'}`}> 
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
              <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.contact}</Link>
              </li>
            </ul>
            <div style={{marginLeft: 'auto', marginRight: '0'}}>
            <input type='color' title="Change background color" onChange={handleChange}/>
            </div>
      
            <div className= "form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable DarkMode</label>
        </div>
          </div>
          </div>
        </nav>
           </div>
          </>
  )
}
