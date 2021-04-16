import express, { json } from 'express';
import cors from 'cors';

const app = express();

// Middlewares 
app.use(json());
app.use(cors());


// routes
import postsRoutes from './routes/posts';

app.use('/posts', postsRoutes);



export default app;

