import express from 'express';
import connectDB from './src/config/db.js';
import { port, uri } from './src/config/constants.js';
import healtCheckRoutes from './src/routes/healtCheckRoutes.js'
import userRoutes from './src/routes/userRoutes.js'

connectDB();

const app = express();
// nos permitira hacer uso de json en peticiones
app.use(express.json());

app.use(uri,healtCheckRoutes);

//http://localhost:5001/api/v0/users
app.use(`${uri}/users`, userRoutes);

const PORT = port || 5000;
app.listen(PORT, console.log(`Server running on http://localhost:${PORT}${uri}`));