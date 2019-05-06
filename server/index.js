const express = require('express');
const app = express();
const PORT = 3000;

app.use('/', express.static(__dirname + '/../client/dist'));

app.get('/endpoint', (req, res) => res.send('hello world'));

app.listen(PORT, () => console.log(`Listening to port ${PORT}...`));
