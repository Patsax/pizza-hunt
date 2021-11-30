const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

// add prefix of `/comments` routes created in `comment-routes.js`
router.use('/comments', commentRoutes);
// add prefix of `/pizzas` routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;
