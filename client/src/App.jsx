import { BrowserRouter,Navigate, Routes, Route } from 'react-router-dom';
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
  const isAuth = Boolean(useSelector((state)=>state.token))

  return (
    <div className='app'>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

