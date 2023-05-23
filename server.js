const express = require('express');
const app = express();

const products = [
  {
    price: "$329",
    image: "img/product-img5.png",
    description: "Product 1 description"
  },
  {
    price: "$249",
    image: "img/product-img1.png",
    description: "Product 2 description"
  },
  {
    price: "$199",
    image: "img/product-img3.png",
    description: "Product 3 description"
  },
  {
    price: "$149",
    image: "img/product-img2.png",
    description: "Product 4 description"
  },
  {
    price: "$99",
    image: "img/product-img4.png",
    description: "Product 5 description"
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(5500, () => {
  console.log('Server is running on port');
});
