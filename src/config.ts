interface Config {
  openAI: {
    apiKey: string;
    assistantId: string;
  };
}

// Get API key from environment variables if available, otherwise use placeholder
const config: Config = {
  openAI: {
    apiKey: process.env.REACT_APP_OPENAI_API_KEY || "", // API key will be set in environment variables
    assistantId: process.env.REACT_APP_OPENAI_ASSISTANT_ID || "", // Assistant ID will be set in environment variables
  }
};

export default config; 