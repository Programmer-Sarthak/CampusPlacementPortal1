import connectDB from './config/db.js';
import express from 'express';


const app = express();
const port = process.env.PORT ?? 3000;

await connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});