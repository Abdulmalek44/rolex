import { Route, Routes } from 'react-router-dom'
import { Home, Login } from './Pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/rolex' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
