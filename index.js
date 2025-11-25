'use strict';

const express = require('express');
const app = express();

function isNumeric(obj) {
  // https://stackoverflow.com/a/175787
  if (typeof obj != "string") return false;
  return !isNaN(obj) && !isNaN(parseFloat(obj));
}

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
app.get('/math/power/:base/:exponent', (req, res) => { 
  const base     = req.params.base;
  const exponent = req.params.exponent;
  let   root     = req.query.root ?? "false";

  // check if is numeric
  if (!isNumeric(base) || !isNumeric(exponent)) {
    res.status(400).json({
      "error": "Invalid input"
    });
  }

  const result = {
    "result": `${Math.pow(base, exponent)}`
  };
  if (root === "true") result["root"] = `${Math.sqrt(base)}`;
  res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});