const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "2048 Game API",
      version: "1.0.0",
      description: "API documentation for the 2048 game backend",
    },
    servers: [
      {
        url: "https://two048-backend-1ofh.onrender.com",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            _id: { type: "string" },
            username: { type: "string" },
            email: { type: "string" },
            token: { type: "string" }
          }
        },
        Game: {
          type: "object",
          properties: {
            _id: { type: "string" },
            user: { type: "string" },
            board: { type: "array", items: { type: "array", items: { type: "number" } } },
            score: { type: "number" }
          }
        },
        Score: {
          type: "object",
          properties: {
            _id: { type: "string" },
            user: { type: "string" },
            score: { type: "number" },
            bestScore: { type: "number" },
            createdAt: { type: "string", format: "date-time" }
          }
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };