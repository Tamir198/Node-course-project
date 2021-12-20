const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { title } = require('process');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routs);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404.pug', {pageTitle:'Page not found'});
});

app.listen(3000);
