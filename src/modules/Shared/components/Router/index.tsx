import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>main page</h1>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
