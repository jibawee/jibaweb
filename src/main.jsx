import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import Root from './routes/Root'
import Home from './routes/Home'


import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { 
              index: true,
              Component: Home,
            }]
            // { 
            //   path: "",
            //   Component: ,
            //   loader: Loader,
            //   children: [
            //     {
            //       path: ":id",
            //       Component: 
            //     }
            //   ]
            // },
            

    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)