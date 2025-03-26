import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Shop from './pages/Shop'

function App() {
  return (
    <div >
          <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
          <Footer />
    </div>
  );
}

export default App;
