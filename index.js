const jsonServer = require("json-server"); // Import json-server
const cors = require("cors"); // Import cors for handling cross-origin requests

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;

// Middleware to parse JSON
server.use(jsonServer.bodyParser);

// Enable CORS
server.use(cors());

// Use default middlewares (e.g., static files, logging)
server.use(middlewares);

// Use the router
server.use(router);

// Start the server
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
