// Basic express server to host the web app

const express = require('express');
const app = express();
const port = process.env.PORT

// Render the html files in the subfolder in public folder
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });
