import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './pages/App';
import Home from './pages/Home';
import Register from './pages/Register';
import UnderConstruction from './pages/UnderConstruction';
import SEO from './pages/components/SEO';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SEO/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<UnderConstruction/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
