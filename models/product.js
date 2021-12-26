const products = [];

module.exports = class Product{
  
  constructor(productTitle){
    this.productTitle = productTitle;
  }

  saveCurrentProduct = () => products.push(this);
  static getAllProducts = () => products;
}