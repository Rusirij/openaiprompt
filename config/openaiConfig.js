const { Configuration, OpenAI } = require("openai");
require("dotenv").config();

// const configuration = new Configuration({
//   apiKey: process.env["OPEN_AI_KEY"],
// });

// const openai = new OpenAIApi(configuration);

const openai = new OpenAI({
  apiKey: process.env["OPEN_AI_KEY"],
});

module.exports = openai;
