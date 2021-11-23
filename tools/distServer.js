const express = require('express');
const path = require('path');
const historyApiFallback = require('connect-history-api-fallback');

const app = express();

app.use(historyApiFallback());
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('App is running on port 3000!\n');
});
