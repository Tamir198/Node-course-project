const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(
  path.dirname(process.mainModule.filename),
  'data', 'products.json'
);

module.exports = class Product {
  constructor(productTitle, imagUrl, description, price) {
    this.productTitle = productTitle;
    this.imagUrl = imagUrl;
    this.description = description;
    this.price = price;
  }

  saveCurrentProduct() {
    fs.readFile(productsFilePath, (err, fileContent) => {
      let products = [];
      if (!err && fileContent.length > 0) {
        products = JSON.parse(fileContent);
      }

      products.push(this);

      fs.writeFile(productsFilePath, JSON.stringify(products), (err) => {
        console.log(`Error writing to products file  ${err}`)
      })
    })
  };

  static async getAllProducts(renderProduct) {
    fs.readFile(productsFilePath, (err, fileContent) => {
      if (err || fileContent.length < 1) {
        renderProduct([]);
        return;
      }
      renderProduct(JSON.parse(fileContent));
    });
  }
};
