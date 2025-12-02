const dotenv = require('dotenv')
const express = require('express')
const app = express()
const PORT = 8880;

dotenv.config();
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const SECRET_MESSAGE = process.env.SECRETMESSAGE;
const PORT = process.env.PORT | 3000;

function basicAuth(req, res, next) {
  const auth = req.headers['authorization'];
 
  console.log(JSON.stringify(req.headers));
  if (auth === `Basic ${USERNAME}:${PASSWORD}`) {
    return next();
  }

  res.set('WWW-Authenticate', 'Basic');
  return res.status(401).send('Invalid Credentials');
}


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/secret', basicAuth, (req, res) => {
  res.send(`${SECRET_MESSAGE}`);
});

app.listen(PORT, () => {
  console.log(`start server at port ${PORT}`);
});
