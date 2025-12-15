import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Aquí se muestran las páginas */}
      <Footer />
    </>
  );
}
