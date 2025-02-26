const express = require('express');
let cors = require('cors');

const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
// --------------

let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

// Endpoint 1: Get the products sorted by popularity
function sortByRating(cond) {
  return (r1, r2) => {
    if (cond === 'high-to-low') return r2.rating - r1.rating;
    else return r1.rating - r2.rating;
  };
}

app.get('/products/sort/popularity', (req, res) => {
  let products_copy = products.slice();
  products_copy.sort(sortByRating('high-to-low'));
  res.json({ products: products_copy });
});

// Endpoint 2: Get the products sorted by “high-to-low” price
function sortByPrice(cond) {
  return (p1, p2) => {
    if (cond === 'high-to-low') return p2.price - p1.price;
    else return p1.price - p2.price;
  };
}

app.get('/products/sort/price-high-to-low', (req, res) => {
  let products_copy = products.slice();
  products_copy.sort(sortByPrice('high-to-low'));
  res.json({ products: products_copy });
});

// Endpoint 3: Get the products sorted by “low-to-high” price
function sortByPrice(cond) {
  return (p1, p2) => {
    if (cond === 'high-to-low') return p2.price - p1.price;
    else return p1.price - p2.price;
  };
}

app.get('/products/sort/price-low-to-high', (req, res) => {
  let products_copy = products.slice();
  products_copy.sort(sortByPrice('low-to-high'));
  res.json({ products: products_copy });
});

// Endpoint 4: Filter the products based on the “RAM” option
function filterByRam(productObj, givenRAM) {
  return productObj.ram == givenRAM;
}

app.get('/products/filter/ram', (req, res) => {
  let givenRam = req.query.ram;
  let products_copy = products.slice();
  let results = products_copy.filter((productObj) =>
    filterByRam(productObj, givenRam)
  );
  res.json({ products: results });
});

// Endpoint 5: Filter the products based on the “ROM” option.
function filterByRom(productObj, givenROM) {
  return productObj.rom == givenROM;
}

app.get('/products/filter/rom', (req, res) => {
  let givenRom = req.query.rom;
  let products_copy = products.slice();
  let results = products_copy.filter((productObj) =>
    filterByRom(productObj, givenRom)
  );
  res.json({ products: results });
});

// Endpoint 6: Filter the products based on the “Brand” option.
function filterByBrand(productObj, givenBrand) {
  return productObj.brand.toLowerCase() == givenBrand.toLowerCase();
}

app.get('/products/filter/brand', (req, res) => {
  let givenBrand = req.query.brand;
  let products_copy = products.slice();
  let results = products_copy.filter((productObj) =>
    filterByBrand(productObj, givenBrand)
  );
  res.json({ products: results });
});

// Endpoint 7: Filter the products based on the “OS” option.
function filterByOS(productObj, givenOS) {
  return productObj.os.toLowerCase() == givenOS.toLowerCase();
}

app.get('/products/filter/os', (req, res) => {
  let givenOS = req.query.os;
  let products_copy = products.slice();
  let results = products_copy.filter((productObj) =>
    filterByOS(productObj, givenOS)
  );
  res.json({ products: results });
});

// Endpoint 8: Filter the products based on the “Price” option.
function filterByPrice(productObj, givenPrice) {
  return productObj.price <= givenPrice;
}

app.get('/products/filter/price', (req, res) => {
  let givenPrice = parseFloat(req.query.price);
  let products_copy = products.slice();
  let results = products_copy.filter((productObj) =>
    filterByPrice(productObj, givenPrice)
  );
  res.json({ products: results });
});

// Endpoint 9: Send original array of products
app.get('/products', (req, res) => {
  res.json({ products: products });
});

// ---------------
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
