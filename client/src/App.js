import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Practice from './pages/Practice';
import Quiz from './pages/Quiz';
import Search from './pages/Search';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/wordlist' element={<Practice />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
