const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Existing route (if any)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// New route for /name
app.get('/name', (req, res) => {
    res.json({ name: "Harshpreet Kaur" }); // You can customize the name or response as needed
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
