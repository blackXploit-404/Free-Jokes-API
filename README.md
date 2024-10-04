
# Free Jokes API

A simple and fun API that provides random jokes or a list of all jokes. Built using **Node.js** and **Express**. This API can fetch jokes either randomly or all at once, and can be easily integrated into any frontend.

## Features

- Fetch a random joke.
- Fetch all jokes.
- CORS enabled for secure cross-origin requests.
- Easy to deploy on platforms like Render.

## Endpoints

### 1. Get All Jokes
- **URL**: `/api/jokes/all`
- **Method**: `GET`
- **Description**: Returns a list of all jokes.
- **Example Request**:
  ```bash
  curl https://jokes-api-test.onrender.com/api/jokes/all
  ```

### 2. Get Random Joke
- **URL**: `/api/jokes/random`
- **Method**: `GET`
- **Description**: Returns a random joke.
- **Example Request**:
  ```bash
  curl https://jokes-api-test.onrender.com/api/jokes/random
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

You can deploy the Jokes API easily on Render. Follow the steps below:

### Deploy to Render

1. **Fork the Repository**: Fork the repository to your own GitHub account.
2. **Create a Web Service**:
   - Sign up on [Render](https://render.com/).
   - Create a new **Web Service** and connect it to your forked GitHub repository.
   - Set the build command as `npm install` and start command as `npm start`.
3. **Deploy**: Render will automatically build and deploy your application.
4. **Access**: After deployment, you will get a public URL like `https://your-app.onrender.com`.

For detailed deployment instructions, check out the [Render deployment guide](https://render.com/docs/deploy-node-express-app).

## Example Deployed API

Check out the live API on Render:
- All Jokes: [https://jokes-api-test.onrender.com/api/jokes/all](https://jokes-api-test.onrender.com/api/jokes/all)
- Random Joke: [https://jokes-api-test.onrender.com/api/jokes/random](https://jokes-api-test.onrender.com/api/jokes/random)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
