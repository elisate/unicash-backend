
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { url } from "inspector";

const Docrouter = express.Router();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "UNICASH PROJECT",
      version: "1.0.0",
      description: "UNICASH BACKEND",
      contact: {
        name: "Mr Elisa",
        email: "dushimiyimanaelisa@gmail.com",
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          scheme: "bearer",
          name: "Authorization",
          in: "header",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
      {
        
        url:" https://unicash-backend.onrender.com",
        description: "Deployed server",
      },
    ],
  },
  apis: ["./Docs/*.js"],
};

const specs = swaggerJSDoc(options);

Docrouter.use("/", swaggerUi.serve);
Docrouter.get("/", swaggerUi.setup(specs));

export default Docrouter;