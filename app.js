import express from 'express';
import connectDB from './src/config/db.js';
import { port, uri } from './src/config/constants.js';
import healtCheckRoutes from './src/routes/healtCheckRoutes.js'
import userRoutes from './src/routes/userRoutes.js'
import authRoutes from './src/routes/authRoutes.js'
import fileRoutes from './src/routes/fileRoutes.js'
import { generalErrorHandler, celebrateErrorHandler } from './src/middleware/errorMiddleware.js';

connectDB();

const app = express();
// nos permitira hacer uso de json en peticiones
app.use(express.json());

app.use(uri,healtCheckRoutes);

//http://localhost:5001/api/v0/users
app.use(`${uri}/users`, userRoutes);

//http://localhost:5001/api/v0/auth
app.use(`${uri}/auth`, authRoutes);

//http://localhost:5001/api/v0/upload
app.use(`${uri}/upload`, fileRoutes);

// Se agregan manejo de errores de celebrate
app.use(celebrateErrorHandler);
app.use(generalErrorHandler);

const PORT = port || 5000;
app.listen(PORT, console.log(`Server running on http://localhost:${PORT}${uri}`));