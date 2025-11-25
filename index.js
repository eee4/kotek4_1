'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
//TODO1  
  const radius = req.params.r;
  const result = {
    "area": `${Math.PI * Math.pow(radius, 2)}`,
    "circumference": `${radius * 2 * Math.PI}`
  };
  res.json(result);
});

//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});