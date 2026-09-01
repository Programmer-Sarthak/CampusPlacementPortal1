import connectDB from './config/db.js';
import express from 'express';
import userRoute from './routes/UserRoute.js';
import authorizedUserRoute from './routes/AuthorizedUserRoute.js';
import requestLogger from './middlewares/requestLogger.js';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

await connectDB();

app.use(express.json());
app.use(requestLogger);
app.use('/api/user', userRoute);
app.use('/api/authorizedUser',authorizedUserRoute);


app.get('/', (req, res) => {
    res.send('Hello, World!');
});



app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});