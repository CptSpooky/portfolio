import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import PageLayout from '@layouts/PageLayout';
import Home from '@pages/home';
import About from '@pages/about';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
