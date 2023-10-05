import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Eduardo } from './pages/Eduardo';
import { Victor } from './pages/Victor';
import { Benjamin } from './pages/Benjamin';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eduardo" element={<Eduardo />} />
          <Route path="/victor" element={<Victor />} />
          <Route path="/benjamin" element={<Benjamin />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
