import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Base from './Components/Base/Base.jsx';
import Home from './Components/Home/Home.jsx';
import Applied from './Components/Applyed/Applied.jsx';


const router = createBrowserRouter([
  {
    path: "/",
     element: <Base></Base>,
     children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <Applied></Applied>
      }
     ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
