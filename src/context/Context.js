import {createContext, useContext, useReducer} from 'react'
import { faker } from '@faker-js/faker';
import cartReduser from './Reduser';

// import * as faker from '@faker-js/faker';


const Cart = createContext()
faker.seed (99);
 const Context = ({children}) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.fashion(),
        // inStock: faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery: faker.datatype.boolean(),
        // ratings: faker.random.arrayElement([1,2,3,4,5])
    }))

    const [state, dispatch] = useReducer(cartReduser, {
        products: products,
        cart: [],

    })
 
    // console.log("p",products)
  return (
    <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
  )
}

export default Context;

export const CartState = () =>{
    return useContext(Cart)
}