import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import Root from './routes/Root'
import Home from './routes/Home'
import Projects from './routes/Projects'
import ProjectDetail from './routes/ProjectDetail'
import Art from './routes/Art'


import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { 
              index: true,
              Component: Home,
            },
            { 
              path: "/projects",
              Component: Projects            
            },
            { 
              path: "/projects/:id",
              Component: ProjectDetail            
            },
            { 
              path: "/art",
              Component: Art            
            }

        ]

    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)