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
app.get('/math/rectangle/:width/:height', (req, res) => { 
  const width  = req.params.width;
  const height = req.params.height;
  const result = {
    "area": `${width * height}`,
    "perimeter": `${2 * width + 2 * height}`
  };
  res.json(result);
});


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});