import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Aquí se renderizan las páginas */}
    </>
  );
}

export default App;
