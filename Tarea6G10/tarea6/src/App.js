import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
