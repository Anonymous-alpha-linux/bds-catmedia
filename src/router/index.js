const { createBrowserRouter } = require('react-router-dom');
const { publicRoutes } = require('./public');
const { adminRoutes } = require('./admin');

const router = createBrowserRouter([...publicRoutes, ...adminRoutes]);

export { router };
