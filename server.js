const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;
const BUILD_DIR = path.join(__dirname, 'build');

// Serve static files
app.use("/CookBook",express.static(BUILD_DIR));

// Serve index.html for any other routes (for SPA)
app.get('/CookBook/*', (req, res) => {
    res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/CookBook`);
});