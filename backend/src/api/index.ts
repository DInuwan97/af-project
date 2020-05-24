import { Router } from 'express';
import client from './client/client.route';
import product from './product/product.route';
import category from './category/category.route';
import storeManager from './admin/storeManager.route';
import wishLists from './wishlist/wishlist.route';
import carts from './cart/cart.route';
import comments from './comment/comment.route';
import ratings from './rating/rating.route';

const router: Router = Router();

router.get('/', (_req, res) => {
  res.send('Response from NodeTS Server');
});

router.use('/client', client);
router.use('/product', product);
router.use('/category',category);
router.use('/storeManager',storeManager);
router.use('/wishList',wishLists);
router.use('/cart', carts);
router.use('/comment',comments);
router.use('/rating',ratings);

export default router;
