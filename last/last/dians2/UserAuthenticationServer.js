const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json()); 


const users = []; 






// Signup endpoint
app.post('/signup', (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  if (users.some(user => user.email === email)) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  if (users.some(user => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const newUser = { firstName, lastName, username, email, password };
  users.push(newUser);
  res.json({ message: 'Signup successful' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.send({ message: `Welcome, ${user.firstName} ${user.lastName}!` });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  });