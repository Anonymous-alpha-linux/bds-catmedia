import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Navbar from '../layouts/navbar/navbar';

export const publicRoutes = [
    {
        path: '/',
        element: (
            <>
                <Navbar />
                <Outlet />
            </>
        ),
        children: [
            {
                path: '',
                element: <div>kjha</div>,
            },
        ],
    },
];
