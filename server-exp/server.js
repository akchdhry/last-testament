// server/server.js
require('dotenv').config();

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

// Only allow requests from your Angular dev server
app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use('/api', createProxyMiddleware({
target: process.env.API_BASE_URL,
changeOrigin: true,
pathRewrite: { '^/api': '' },

// Attach the API key to every outgoing request
on: {
    proxyReq: (proxyReq) => {
        proxyReq.setHeader('Authorization', `Bearer ${process.env.API_KEY}`);
        // If the API uses a key query param instead, use this approach:
        // The URL rewrite for query params is handled via router (see note below)
    }
}
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));