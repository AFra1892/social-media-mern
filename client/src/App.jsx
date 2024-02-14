import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from 'scense/homePage/HomePage';
import LoginPage from 'scense/loginPage/LoginPage';
import ProfilePage from 'scense/profilePage/ProfilePage';
import { useMemo } from 'react';
import { UseSelector, useSelector } from 'react-redux';
import { CssBaseline , ThemeProvider } from '@mui/material';
import {createSetting, createTheme} from '@mui/material/styles'
import { themeSettings } from 'theme';


export default function App() {
  const mode = useSelector((state) =>state.mode)
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])


  return (
    <div className='app'>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage />}/>
          <Route path="/profile/:userId" element={<ProfilePage/> }/>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

