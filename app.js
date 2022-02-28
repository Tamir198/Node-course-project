const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRouts = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const pageNotFoundController = require('./controllers/pageNotFound')

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouts);
app.use('/shop',shopRoutes);

app.use(pageNotFoundController.pageNotFound);

app.listen(3000);
