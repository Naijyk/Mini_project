const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const INCR_COUNT = 'INCR_COUNT';
const DECR_COUNT = 'DECR_COUNT';
const CLEAR_CART = 'CLEAR_CART';

export const addToCartAction = product => ({ type: ADD_TO_CART, payload: product });
export const deleteCartItemAction = id => ({ type: DELETE_CART_ITEM, payload: id });
export const incrCartItemAction = id => ({ type: INCR_COUNT, payload: id });
export const decrCartItemAction = id => ({ type: DECR_COUNT, payload: id });
export const clearCartAction = () => ({ type: CLEAR_CART })

const checkProduct = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id);
    if(productInState) {
        productInState.count++;
        return [...state]
    } else {
        return [...state, {...payload, count: 1}]
    }
}

export const cartReducer = ( state = defaultState, action ) => {

    if( action.type === ADD_TO_CART ) {
        return checkProduct(state, action.payload)
    } else if( action.type === DELETE_CART_ITEM ) {
        return state.filter(el => el.id !== action.payload)
    } else if( action.type === INCR_COUNT ) {
        const targetItem = state.find(el => el.id === action.payload);
        targetItem.count++;
        return [...state]
    } else if( action.type === DECR_COUNT ) {
        const targetItem = state.find(el => el.id === action.payload);
        if(targetItem.count === 1) {
            return state = state.filter(el => el.id !== action.payload);
        } else {
            targetItem.count--;
        }
        return [...state];
    } else if( action.type === CLEAR_CART ) {
        return []
    }

    return state;
}