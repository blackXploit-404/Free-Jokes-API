# Free Jokes API

A fun and simple API that delivers random jokes or a list of jokes in multiple languages (English, Hindi, Bengali). This API, built using **Node.js** and **Express**, is perfect for fetching random jokes, language-specific jokes, or a complete list of jokes. With CORS support, it can be easily integrated into any frontend application.

## Features

- Fetch a random joke from the collection.
- Fetch all jokes.
- Fetch jokes in a specific language (English, Hindi, Bengali).
- CORS enabled for secure cross-origin requests.
- Easy to deploy on platforms like Render.

## Endpoints

### 1. Get All Jokes
- **URL**: `/api/jokes/all`
- **Method**: `GET`
- **Description**: Returns a list of all jokes in all languages (English, Hindi, Bengali).
- **Example Request**:
  ```bash
  curl https://jokes-api-test.onrender.com/api/jokes/all
  ```

### 2. Get Random Joke
- **URL**: `/api/jokes/random`
- **Method**: `GET`
- **Description**: Returns a random joke from the collection.
- **Example Request**:
  ```bash
  curl https://jokes-api-test.onrender.com/api/jokes/random
  ```

### 3. Get Jokes by Language
- **URL**: `/api/jokes/:language`
- **Method**: `GET`
- **Description**: Fetch jokes in a specific language by passing the language name in the URL (`English`, `Hindi`, or `Bengali`).
- **Example Request**:
  ```bash
  curl https://jokes-api-test.onrender.com/api/jokes/hindi
  ```

## Technologies Used

- **Node.js**
- **Express.js**
- **Axios** (For testing API calls in frontend)
- **CORS** (To handle cross-origin requests)

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/blackXploit-404/Free-Jokes-API
   ```
2. Navigate to the project directory:
   ```bash
   cd Free-Jokes-API
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Your API should now be running on `http://localhost:4000`.

## Deployment

You can easily deploy the Jokes API on platforms like Render. Follow the steps below:

### Deploy to Render

1. **Fork the Repository**: Fork the repository to your GitHub account.
2. **Create a Web Service**:
   - Sign up on [Render](https://render.com/).
   - Create a new **Web Service** and connect it to your forked repository.
   - Set the build command as `npm install` and start command as `npm start`.
3. **Deploy**: Render will automatically build and deploy your app.
4. **Access**: Once deployed, you'll receive a public URL like `https://your-app.onrender.com`.

For detailed deployment instructions, refer to the [Render deployment guide](https://render.com/docs/deploy-node-express-app).

## Example Deployed API

Check out the live API on Render:
- All Jokes: [https://jokes-api-test.onrender.com/api/jokes/all](https://jokes-api-test.onrender.com/api/jokes/all)
- Random Joke: [https://jokes-api-test.onrender.com/api/jokes/random](https://jokes-api-test.onrender.com/api/jokes/random)
- Jokes by Language: [https://jokes-api-test.onrender.com/api/jokes/hindi](https://jokes-api-test.onrender.com/api/jokes/hindi)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.