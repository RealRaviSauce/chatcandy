# OpenAI Assistant Chat Bot

A modern React chat interface that connects to OpenAI's Assistant API for intelligent responses. This project demonstrates integrating OpenAI's powerful language models into a chat application.

## Features

- Clean, modern UI with message bubbles
- Responsive design that works on both desktop and mobile
- Integration with OpenAI's Assistant API
- Realistic chat experience with typing indicators
- Auto-scrolling messages

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)
- OpenAI API key
- OpenAI Assistant ID

### Installation

1. Clone this repository or download the source code
2. Navigate to the project directory:
   ```
   cd chatbot
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Environment Variables Setup

For local development:
1. Create a `.env.local` file in the root directory
2. Add your OpenAI credentials:
   ```
   REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
   REACT_APP_OPENAI_ASSISTANT_ID=your_assistant_id_here
   ```

### Running the Application

To start the development server:

```
npm start
```

The application will open in your default browser at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create an optimized production build:

```
npm run build
```

The build files will be in the `build` directory and can be deployed to any static hosting service.

## Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. In the Vercel dashboard, add the following environment variables:
   - `REACT_APP_OPENAI_API_KEY`
   - `REACT_APP_OPENAI_ASSISTANT_ID`
4. Deploy your application

**Note:** Make sure to never commit your actual API key to the repository. Always use environment variables for sensitive information.

## How It Works

1. When the application starts, it creates a new thread with the OpenAI Assistant API
2. User messages are sent to this thread
3. The assistant processes the messages and generates responses
4. Responses are displayed in the chat interface with a typing indicator during processing

## Security Considerations

The application is configured to use environment variables for API keys. For production:

1. Use a secure method to set environment variables in your hosting platform
2. Consider implementing a backend proxy service to handle API requests
3. Set up proper authentication for your chat application

## Extending the Project

Some ideas for extending this project:

1. Add user authentication
2. Implement persistent chat history with a database
3. Support file attachments (OpenAI Assistants can analyze documents)
4. Add different assistants for specialized topics
5. Implement voice input and output capabilities

## License

This project is open source and available under the MIT License.
