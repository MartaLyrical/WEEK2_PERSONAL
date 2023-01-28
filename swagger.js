const swaggerAutogen = require("swagger-autogen")();
const doc = {
  info: {
    title: "My Conctacts",
    description: "Marta Contacts",
  },
  host: "cs341-week-2-personal.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
