import './App.css';
import About from './components/about';
import AddNote from './components/addNote';
import Login from './components/login';
import NavBar from './components/navbar';
import NotesComponent from './components/notesComponent';
import SignUp from './components/signup';
import NoteState from './contexts/notes/noteState';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Alert from "./components/alert"
import EditNote from './components/editNote';


function App() {
  
  return (<NoteState>
    <Router>
    
      <NavBar />
      <Alert/>
      <Routes>
        <Route path="/" element={<div  >
          <Link to="/addnote"><button className='btn btn-dark mx-4 ' style={{marginTop:"50px",translate:"550px"}}><i className="fa-solid fa-plus"></i> Add Note</button></Link>
          <NotesComponent />
        </div>} />

        <Route path="/about" element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addnote' element={<AddNote />} />
        <Route path='/editnote/:id' element={<EditNote />} />


      </Routes>
    </Router>
  </NoteState>
  )
}

export default App;
