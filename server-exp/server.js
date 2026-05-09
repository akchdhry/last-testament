require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// Register route groups
app.use('/api/users', userRoutes);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Proxy running on port ${process.env.PORT || 3000}`)
);