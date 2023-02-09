import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Member from './pages/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Member/>} path="/chat"/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;