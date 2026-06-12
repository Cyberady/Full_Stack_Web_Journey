import OpenAI from "openai/index.js";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    'you_key',
})

/*
Challenge:
I've pasted some output below. Try and figure out 
what instructions I gave to OpenAI to get the output.

On the screen, visions gleam, a tech queen's dream,
in every home's scene.
Pixels dance, in a trance, shows advance, in a
high-def glance.
Remote in hand, worlds expand, from sitcom land to 
thats's grand.
Binging shows, the excitment grows, the plot thickens
and the time just flows.
From dawn till night, in colors bright, TVs light up
our life just right.

*/

const messages = [
    {
        role: 'system',
        content: 'You are a helpful assistant.'
    },
    {
        role: 'user',
        content: 'My name is Aditya.'
    }
]

const response = await openai.chat.completions.create({
    model: "openai/gpt-oss-120b:free",
    messages: messages
})

console.log(response.choices[0].message.content)