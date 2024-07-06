import React, { useContext} from 'react'
import { Link ,useLocation} from 'react-router-dom'
import NoteContext from '../contexts/notes/noteContext';
export default function NavBar() {
  let location = useLocation();
  const context=useContext(NoteContext)
  const {name,setName}=context
  const onClick=()=>{
    setName("")
  }
  return (
    <div className='fixed-top'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">INoteBook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${(location.pathname==="/")?"active":""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${(location.pathname==="/about")?"active":""}`} aria-current="page" to="/about">About</Link>
              </li>
              {name &&(<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hi {name}!
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/login" onClick={onClick}>Logout</Link></li>
            <li><Link className="dropdown-item" to="/signup" onClick={onClick}>Create new Account</Link></li>
          </ul>
        </li>)}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
