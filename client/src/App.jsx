import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from 'scense/homePage/HomePage';
import LoginPage from 'scense/loginPage/LoginPage';
import ProfilePage from 'scense/profilePage/ProfilePage';


export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
      
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage />}/>
            <Route
              path="/profile/:userId"
              element={<ProfilePage/> }
            />

      </Routes>
    </BrowserRouter>
  );
}

