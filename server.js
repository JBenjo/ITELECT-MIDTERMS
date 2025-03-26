const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '/')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Homepage.html'));
});

app.get('/achievements', (req, res) => {
  res.sendFile(path.join(__dirname, 'Achievements.html'));
});

app.get('/production', (req, res) => {
  res.sendFile(path.join(__dirname, 'Production.html'));
});

app.get('/opportunities', (req, res) => {
  res.sendFile(path.join(__dirname, 'Oppurtinities.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'Contact.html'));
});

// Handle 404
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the website`);
});