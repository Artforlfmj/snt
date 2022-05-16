// Basic express server to host the web app

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Render the html files in the subfolder in public folde
// Set the vew engine to html
app.set('view engine', 'html');
// Set views file to public folder
app.set('views', __dirname + '/public');
app.use(express.static(__dirname + '/public'));

// Send rip 404 if no route is found
app.get((req, res) => {
    res.status(404).send('404: Page not found');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });
