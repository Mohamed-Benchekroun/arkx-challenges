const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my Express.js server!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
