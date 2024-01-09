import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './NavBar.jsx'
import Owner from './Owner.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
    {/* home page */}
      <NavBar />
      <App />
    </>
  },
  {
    path: '/Owner',
    element: <>
      <NavBar />
      <Owner />
    </>
  }



])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <App />
  // {/* </React.StrictMode>, */}
  <RouterProvider router={router} />
)
