import { Configuration, OpenAIApi } from "openai";
import { env } from "process";
declare global {
  // eslint-disable-next-line no-var
  var openai: OpenAIApi | undefined;
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
export const openai = global.openai || new OpenAIApi(configuration);

if (env.NODE_ENV !== "production") {
  global.openai = openai;
}
