import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full max-w-[110rem] flex flex-col justify-center items-center'>
          <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
          <Footer />
      </div>
    </div>

  );
}

export default App;
