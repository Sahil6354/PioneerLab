// const swaggerJsdoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// const options = {
//   swaggerDefinition: {
//     openapi: "3.0.0",
//     info: {
//       title: "JWT Auth and Public API Data Retrieval",
//       version: "1.0.0",
//       description:
//         "A sample API for JWT authentication, fetching public API data with filtering, and Swagger documentation",
//     },
//     servers: [
//       {
//         url: "http://localhost:3000",
//         description: "Local server",
//       },
//     ],
//   },
//   apis: ["./routes/*.js", "./swagger/*"], // Point to the API routes and potential additional Swagger docs
// };

// const specs = swaggerJsdoc(options);

// module.exports = (app) => {
//   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
// };

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "JWT Auth and Public API Data Retrieval",
      version: "1.0.0",
      description:
        "A sample API for JWT authentication, fetching public API data with filtering, and Swagger documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
          description: "JWT authorization token",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js", "./swagger/*"], // Point to the API routes and potential additional Swagger docs
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      explorer: true,
      swaggerOptions: {
        defaultModelsExpandDepth: -1,
        defaultModelExpandDepth: -1,
        docExpansion: "list",
        defaultModelRendering: "model",
        showRequestHeaders: true,
        supportedSubmitMethods: ["get", "post", "put", "delete", "patch"],
        defaultModelExpandDepth: 0,
        displayRequestDuration: true,
        tryItOutEnabled: true,
        validatorUrl: null,
        showCommonExtensions: true,
        showExtensions: true,
        filter: true,
        deepLinking: true,
        displayOperationId: true,
        displayOperationIdInTooltip: true,
        maxDisplayedTags: Infinity,
        operationsSorter: "alpha",
        tagsSorter: "alpha",
        showExtensions: true,
        showCommonExtensions: true,
        securityDefinitions: {
          bearerAuth: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
            description: "JWT authorization token",
          },
        },
        defaultModelRendering: "example",
        displayRequestDuration: true,
        defaultModelExpandDepth: 1,
        showExtensions: true,
      },
      customSiteTitle: "Swagger JWT Authentication", // Customize the title displayed in the UI
    })
  );
};
