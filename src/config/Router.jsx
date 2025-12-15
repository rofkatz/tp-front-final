import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Questions from '../pages/Questions/Questions.jsx';
import Services from '../pages/Services/Services.jsx';
import Layout from '../components/Layout.jsx';
import Contact from '../pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/preguntas-frecuentes',
        element: <Questions />,
      },
      {
        path: '/servicios',
        element: <Services />,
      },
      {
        path: '/contacto',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
