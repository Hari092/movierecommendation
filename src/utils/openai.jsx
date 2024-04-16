import OpenAI from "openai";
// import { OPEN_AI_KEY } from "./Constants";

  const openai = new OpenAI({
    apiKey:"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",
    dangerouslyAllowBrowser: true
  });

export default openai