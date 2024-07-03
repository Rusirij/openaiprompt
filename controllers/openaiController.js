const openai = require("../config/openaiConfig");

const generateMeta = async (req, res) => {
  const { title } = req.body;

  const description = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content:
          " Come up with a description for a YouTube videop called ${title}",
      },
    ],
    max_tokens: 100,
  });

  const tags = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: " Come up with 10 keywords for YoutTube video called ${title}",
      },
    ],
    max_tokens: 100,
  });

  res.status(200).json({
    description: description.data.choices[0].message,
    tags: tags.data.choices[0].message,
  });
};

// Generate images
const generateImages = async (req, res) => {
  const image = await openai.images.generate({
    // model: "dall-e-3",
    prompt: req.body.prompt,
    n: 1,
    size: "512x512",
  });

  res.json({
    url: image.data.data[0].url,
  });
};

module.exports = { generateMeta, generateImages };
