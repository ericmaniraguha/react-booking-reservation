impory {ActionTypes} from '../constants/action-types.js'

export const setProducts = (products) =>{
  return {
    type:SET_PRODUCTS,
    payload: products
  }
}

export const selectedProduct = (product) =>{
  return {
    type:SET_PRODUCTS,
    payload: product
  }
}