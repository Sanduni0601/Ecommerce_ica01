import React,{useState} from 'react';
import '../assets/CSS/layout.css';
import Product from '../components/Product';
import Cart from '../components/Cart';
import { flowers } from './FlowerDB';


export default function Products(){
    const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      updatedCart.push({ ...product, quantity });
    }

    setCartItems(updatedCart);
  };
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        flowers.map((flower) => (
                            <Product key={flower.id} product={flower} addToCart={addToCart} />
                          ))
                    }
                </div>

            </div>
            <div className="item3">
                {
                <Cart cartItems={cartItems} />
                }
            </div>
        </>
    );

}