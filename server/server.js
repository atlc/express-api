const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');

let app = express();
let port = 9001;

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

app.listen(port);
console.log(`App listening on ${port}`);