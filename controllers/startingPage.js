exports.startingPage =  (req, res, next) => {
  res.render('shop/starting-page', {
    pageTitle: 'StartingPage',
    path: '/'
  });
}