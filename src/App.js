import Navbar from './components/Nav';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from './styles/global-style';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/menu' exact element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
