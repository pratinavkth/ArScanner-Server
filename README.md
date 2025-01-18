# arscanner-server

## Description
arscanner-server is a Node.js application that utilizes Google Generative AI to process text-to-text requests. It provides an API endpoint for generating responses based on user input.

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd arscanner-server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your `GEMINI_API` key:
   ```
   GEMINI_API=your_api_key_here
   ```

## Usage
To run the server, use the following command:
```bash
npm start
```
The server will start and listen on the port defined in your `.env` file.

## API Endpoints
- **POST /texttotext**
  - Description: Processes a text-to-text request and returns a generated response.
  - Request Body: JSON object containing the message.
  - Response: JSON object with the generated response.

## Dependencies
- `@google/generative-ai`: For generative AI functionalities.
- `dotenv`: For environment variable management.
- `express`: For server framework.
- `multer`: For handling multipart/form-data.

## License
This project is licensed under the ISC License.
