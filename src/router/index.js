const { createBrowserRouter } = require('react-router-dom');
const { publicRouter } = require('./public');
const { adminRouter } = require('./admin');

const router = createBrowserRouter([publicRouter, adminRouter]);

export { router };
