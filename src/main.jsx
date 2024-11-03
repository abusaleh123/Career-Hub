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
import JobDetails from './Components/JobDetails/JobDetails.jsx';


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
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json')
   
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
        loader: () => fetch('/jobs.json')
      },
     
     ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
