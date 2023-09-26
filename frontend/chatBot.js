import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "ORG",
    apiKey: "KEY",
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
