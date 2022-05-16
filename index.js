// Basic express server to host the web app

const express = require('express');
const app = express();
const port = process.env.PORT

// Render the html files in the subfolder in public folder
app.use(express.static('public'));

// Send rip 404 if no route is found
app.use((req, res) => {
    res.status(404).send('404: Page not found');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });
