import * as mongoose from 'mongoose';
import {IWishList} from './wishlist.interface';
import Product from '../product/product.class';

export const WishListSchema = new mongoose.Schema({
    clientId:{   type:mongoose.Schema.Types.String,
        ref:"Client"},
    items:[{
        productId:{type:String,required:true}
    }],
});

const WishList = mongoose.model<IWishList>("WishList",WishListSchema);
export default WishList;