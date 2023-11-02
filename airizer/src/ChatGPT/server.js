const express = require("express");
require('dotenv').config();
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");


    const app = express();
    app.use(bodyParser.json());
    app.use(cors())


const configuration = new Configuration({
    apiKey: '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',
  });
  // CHATBOT_KEY is key name in .env file. .env file should be in project root directory - format is below
  // CHATBOT_KEY="YOR-API-KEY"
  
const openai = new OpenAIApi(configuration);

app.post("/chat", async (req, res) => {
    const { prompt } = req.body;
    const completion = await openai.createCompletion({
      model: "text-davinci-003", 
      prompt: prompt,
      max_tokens: 2048,
    });
    res.send(completion.data.choices[0].text);
  });

const port = 5555;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});