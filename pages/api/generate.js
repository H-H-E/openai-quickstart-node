import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.topic),
    temperature: 0.7,
    max_tokens: 500,
  
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(topic) {
  const capitalizedtopic =
    topic[0].toUpperCase() + topic.slice(1).toLowerCase();
  return `write me some hilarious jokes  

topic:unemployment, work
joke:I know a lot of jokes about unemployed people but none of them work.

topic: deaf
joke: Say what you want about deaf people.  
topics: war, veteran, cooking
joke: A soldier survived mustard gas in battle, and then pepper spray by the police. He's now a seasoned veteran.
topics: injury
joke: I told my doctor that I broke my arm in two places. He told me to stop going to those places.
topic: ${capitalizedtopic}
joke:`;
}
