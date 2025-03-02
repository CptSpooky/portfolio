import { HashRouter, Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import PageLayout from '@layouts/PageLayout';
import Home from '@pages/Home';
import About from '@pages/About';
import Education from '@pages/Education';
import Work from '@pages/Work';

const Router: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
