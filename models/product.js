const fs = require('fs');
const path = require('path');

module.exports = class Product {

  constructor(productTitle) {
    this.productTitle = productTitle;
  }
                                             
  saveCurrentProduct(){
    const productsFilePath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

    fs.readFile(productsFilePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        if(!err && fileContent.length){
          products = JSON.parse(fileContent);
        }
      }
      products.push(this);
      fs.writeFile(productsFilePath, JSON.stringify(products), (err) => {
        console.log(`Error writing to products file  ${err}`)
      })
    })
  };

  static async getAllProducts(callBack){
    const productsFilePath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
     fs.readFile(productsFilePath, (err, fileContent) => {
      if (err) {
        callBack([]);
      }
      callBack(JSON.parse(fileContent));
    });
  }
};
