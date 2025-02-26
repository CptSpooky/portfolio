import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import Home from '@pages/home';
import About from '@pages/about';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
