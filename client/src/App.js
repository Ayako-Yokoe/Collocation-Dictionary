import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Practice from './pages/Practice';
import Quiz from './pages/Quiz';
import Search from './pages/Search';
import PrivateRoute from './container/PrivateRoute';
import RegisterContainer from './container/RegisterContainer';
import LoginContainer from './container/LoginContainer';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* <Route element={<PrivateRoute />}> */}
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/practice' element={<Practice />} />
          <Route path='/quiz' element={<Quiz />} />
        {/* </Route> */}

        <Route path='/register' element={<RegisterContainer />}  />
        <Route path='/login' element={<LoginContainer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
