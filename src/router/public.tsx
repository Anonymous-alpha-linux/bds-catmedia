import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const publicRoutes = [
    {
        path: '/',
        element: (
            <React.Fragment>
                <h2>Title</h2>
            </React.Fragment>
        ),
    },
];

export const publicRouter = createBrowserRouter(publicRoutes);
