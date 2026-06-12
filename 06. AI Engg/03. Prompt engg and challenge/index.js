import OpenAI from "openai/index.js"

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    "your_key",
})

/**
 * Challenge
 * 1. Ask OpenAI to explain something complicated
 *    to you. For example Quantum Computing.
 *
 * Prompt Engineering Stretch Goals
 * - See if you can control the level of complexity of
 *   the generated content, for example is this for
 *   10-year-olds or college kids?
 * - See if you can control the length of the output.
 **/

const messages = [
  {
    role: "system",
    content:
      "You are a helpful assistant that explains things in language that a 10-year-old can understand. Your answers are always less than 100 words ",
  },
  {
    role: "user",
    content: "What is Quantum Computing?",
  },
]

const response = await openai.chat.completions.create({
  model: "openai/gpt-oss-120b:free",
  messages: messages,
})

console.log(response.choices[0].message.content)
