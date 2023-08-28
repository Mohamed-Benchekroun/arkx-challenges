const express = require('express');
const app = express();

app.use(express.json())
let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
  { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
  { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
  { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
  { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];

app.get('/products', (req, res) => {
  res.send(products);
});
app.get('/products/:id', (req, res) => {
    let id = req.params.id;
    let product = products.find(p => p.id == id);
    if (!product) return res.status(404).send('Product not found');
    res.send(product);
});
app.get('/products/search/product', (req, res) => {
    let { minprice, maxprice } = req.query;
    console.log(minprice, maxprice)
    let p = products.filter(p => p.price >= minprice && p.price <= maxprice);
    if (!p.length) return res.send(`Products not found between ${minprice} & ${maxprice}`)
    res.send(p);

});

app.post('/products', (req, res) => { 
    let product = req.body;
    console.log(product)
    products.push({
        id: products.length + 1,
        name: product.name,
        price: product.price
    });
    res.send(products); 
})

app.put('/products/:id', (req, res) => {
    let id = req.params.id;
    let product = req.body;
    let index = products.findIndex(p => p.id == id);
    if (index == -1) return res.status(404).send('Product not found');
    products[index].name = product.name;
    products[index].price = product.price;
    res.send(products);
})

app.delete('/products/:id', (req, res) => {
    let id = req.params.id;
    let index = products.findIndex(p => p.id == id);
    if (index == -1) return res.status(404).send('Product not found');
    products.splice(index, 1);
    res.send(products);
})



   

    

      




    app.listen(3000, () => {
      console.log('listening on port 3000!');
    });