import express from 'express';
import Routes from './src/routes/main.js';


// initialize express app
const app = express();

// define port number from environment variable or use default port 3000
const PORT = process.env.PORT || 3000;
// ! start routing system
app.use(Routes);
// ! end routing system
//  listen to port 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});