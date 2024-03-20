import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";
import { loadSingleProductAction } from "../store/reducers/singleProductReducer";

export const getProductsByCategory = category => {
    return dispatch => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(json => dispatch(loadProductsByCategoryAction(json)));
    }
}

export const getSingleProduct = id => {
    return dispatch => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => dispatch(loadSingleProductAction(json)));
    }
}