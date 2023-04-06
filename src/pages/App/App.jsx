import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotePage from '../NewNotePage/NewNotePage';
import NotesPage from '../NotesPage/NotesPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service.js'; 
import LoginForm from '../../components/LoginForm/LoginForm';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={ user } setUser={ setUser } />
            <Routes>
              {/* Route components in here */}
              <Route path="/notes/new" element={<NewNotePage />} />
              <Route path="/notes" element={<NotesPage />} />
              <Route path="/login" element={< LoginForm/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={ setUser }/>
      }
    </main>
  );
}
