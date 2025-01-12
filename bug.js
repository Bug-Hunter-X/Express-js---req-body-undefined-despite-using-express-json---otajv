const express = require('express');
const app = express();
app.use(express.json());

app.post('/data', (req, res) => {
  console.log(req.body);
  // some logic
  res.send('OK');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});