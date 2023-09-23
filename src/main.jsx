import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Statistics from './Components/Statistics/Statistics';
import Appliedjobs from './Components/AppliedJjobs/Appliedjobs';
import Blogs from './Components/Blogs/Blogs';
import Errorpage from './Components/Error/Errorpage';
import Jobdetails from './Components/JobDetails/Jobdetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Statistics></Statistics>
      },
      {
        path:"/job/:id",
        element: <Jobdetails></Jobdetails>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: "/applied",
        element: <Appliedjobs></Appliedjobs>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
