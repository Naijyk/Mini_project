import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoriesReducer } from './reducers/categoriesReduser';
import { thunk } from "redux-thunk";
import { ProductsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { SingleProductReducer } from "./reducers/singleProductReducer";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsByCategory: ProductsByCategoryReducer,
    singleProduct: SingleProductReducer,
    cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));