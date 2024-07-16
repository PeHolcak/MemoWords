import express, { Express } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from "cors";

import { connectToDatabase } from './configs/database';
import { createError } from './middlewares/errorHandler';
import userRoutes from './routes/user.route';
import authRoutes from './routes/auth.route';

const app: Express = express();
const __dirname = path.resolve();

// Databázové připojení
connectToDatabase();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3001' // admin pages
}));


// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Error Handling Middleware
app.use(createError);

app.listen(3000, () => {
  console.info('Server listening on port 3000');
});
