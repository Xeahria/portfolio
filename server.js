const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

let visitorCount = 0;

// Read the counter from a file (if it exists) when the server starts
if (fs.existsSync('counter.json')) {
    const data = fs.readFileSync('counter.json');
    const json = JSON.parse(data);
    visitorCount = json.count;
}

// Serve the counter when a user visits the page
app.get('/', (req, res) => {
    // Increment the counter
    visitorCount++;

    // Save the updated count to the file
    const newCount = { count: visitorCount };
    fs.writeFileSync('counter.json', JSON.stringify(newCount));

    // Serve your HTML with the visitor counter
    res.send(`
        <html>
            <head>
                <title>Visitor Counter</title>
            </head>
            <body>
                <h1>Welcome to My Website</h1>
                <p>This site has been visited ${visitorCount} times.</p>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});