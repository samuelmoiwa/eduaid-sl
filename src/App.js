import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div >
          <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
          <Footer />
    </div>
  );
}

export default App;
