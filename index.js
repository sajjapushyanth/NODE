const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Azure!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});


function add(a,b){
    return a+b
}

console.log(add(2,3))
