
const fs = require('fs');
const path = require('path');

const cartFilePath = path.join(
  path.dirname(process.mainModule.filename),
  'data', 'cart.json'
);

module.exports = class Cart{

  static addProduct(id, price) {

    fs.readFile(cartFilePath, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const exisitingProdact = cart.products.findIndex((item) => item.id === id);
      if (exisitingProdact !== -1) {
        cart.products[exisitingProdact].qty += 1;
      } else {
        cart.products.push({ id, qty: 1 });
      }

      cart.totalPrice += +price;
      fs.writeFile(cartFilePath, JSON.stringify(cart), (err) => {
        console.log(err);
      });

    });

  }
  
}