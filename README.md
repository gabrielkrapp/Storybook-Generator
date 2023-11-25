![Logo](https://github.com/gabrielkrapp/AI-Historys/assets/109620152/0b380094-6c62-46a5-9412-65942e345b61)

# Storybook Generator

Welcome to the Storybook Generator! This innovative application integrates with OpenAI's powerful language model to create enchanting and personalized stories for children.

## Live Demo

Soon i will be adding the live demo link here.

## Application Prints

![Home](https://github.com/gabrielkrapp/AI-Historys/assets/109620152/6b84aca8-e800-4fb4-b6d4-623b94de8c7a)

![Loading](https://github.com/gabrielkrapp/AI-Historys/assets/109620152/288c4e64-7495-4aa8-bc18-92ec1fabf428)

![Story](https://github.com/gabrielkrapp/AI-Historys/assets/109620152/7454c84e-a3fd-4666-9420-3161e5f4ba91)

## Technologies Used

- React.js
- Tailwind CSS
- Axios for HTTP requests
- ViteJS as the build tool
- OpenAI's GPT-3 for generating stories

## Integration with OpenAI

This project leverages OpenAI's GPT-3 to dynamically generate stories based on user inputs. By providing a theme, the app communicates with the OpenAI API to retrieve a unique story each time.

## Configuration

To run this project locally, you'll need to set up your environment variables. Create a `.env` file in the root of the project and define the following variables:

### In the frontend

```plaintext
VITE_BACKEND_URL=your-backend-url
```

### In the backend

```plaintext
OPENAI_API_URL=your-openai-api-url
OPENAI_API_KEY=your-openai-api-key
FRONT_END_URL=your-frontend-url
```

Replace your-backend-url with the URL of your backend and your-openai-api-key with your OpenAI API key.

## Known Bug

There's a known issue where occasionally the OpenAI API may return incomplete stories. This is being investigated, and a fix will be implemented as soon as possible.

## Mobile Application

The mobile version of this application is currently under development using React Native. It will be available on both iOS and Android platforms. Stay tuned for the release and the addition of download links.

## Contributing

We welcome contributions to this project. If you have suggestions or encounter any bugs, please open an issue in the repository.

Thank you for visiting the Storybook Generator project!
