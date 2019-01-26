const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.join('build')));

server.listen(5000);
console.log('server running at port 5000');
