import './App.css';
import { BrowserRouter as Router, Route,RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Root from './pages/Root';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useState } from 'react';
import NotFound from './pages/NotFound';


function App() {

 

  return (

<Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
