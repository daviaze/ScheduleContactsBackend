const express = require('express');
const routes = express.Router();

const ContactController = require('./controllers/ContactController')
routes.get("/contacts", ContactController.filter);
routes.get("/historic", ContactController.filter2);
routes.get("/contacthistoric/:id", ContactController.show);
routes.get("/contacts/:id", ContactController.show);
routes.put("/contacts/:id", ContactController.update);
routes.delete("/contacts/:id", ContactController.destroy);
routes.delete("/contacthistoric/:id", ContactController.destroy);
routes.post("/create", ContactController.create);



module.exports = routes;