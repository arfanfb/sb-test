const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('App is running on port 3000!\n');
});
