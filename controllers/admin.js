exports.adminProducts =  (req, res, next) => {
  res.render('admin/admin-products', {
    pageTitle: 'productList',
    path: '/admin-products'
  });
}