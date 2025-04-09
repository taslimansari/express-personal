const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

// Updated routes based on new directory structure
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});


app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.get('/portfolio', (req, res) => {
  res.sendFile(__dirname + '/public/portfolio.html');
});

app.get('/portfolio-details', (req, res) => {
  res.sendFile(__dirname + '/public/portfolio-details.html');
});

app.get('/resume', (req, res) => {
  res.sendFile(__dirname + '/public/resume.html');
});

app.get('/services', (req, res) => {
  res.sendFile(__dirname + '/public/services.html');
});

app.get('/starter-page', (req, res) => {
  res.sendFile(__dirname + '/public/starter-page.html');
});

app.listen(port, () => {
  console.log(`CCL Project is running at http://localhost:${port}`);
});
