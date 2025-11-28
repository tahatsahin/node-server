const express = require('express')
const app = express()
const PORT = 8880;

function basicAuth(req, res, next) {
  const auth = req.headers['authorization'];
  if (auth === 'Basic admin') {
    return next();
  }

  res.set('WWW-Authenticate', 'Basic');
  return res.status(401).send('Invalid Credentials');
}


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/secret', basicAuth, (req, res) => {
  res.send('This is a secret!');
});

app.listen(PORT, () => {
  console.log(`start server at port ${PORT}`);
});
