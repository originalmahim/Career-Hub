import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Statistics from './Components/Statistics/Statistics';
import Appliedjobs from './Components/AppliedJjobs/Appliedjobs';
import Blogs from './Components/Blogs/Blogs';
import Errorpage from './Components/Error/Errorpage';
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
        path: "/applied",
        element: <Appliedjobs></Appliedjobs>
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
