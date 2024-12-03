import '../assets/CSS/layout.css';
import React,{useState} from 'react';

export default function Product({props,addToCart}){
    const [quantity,setQuantity] = useState();

    const handleAddToCart = () => {
        addToCart(props, quantity);
      };

    return(
        <div className="grid-item">

            <div class="card">
                <img src = {require('../assets/image/'+props.img)} alt="image"/>
                <div class="card-body">
                    <h5 class="card-title">{props.name} Price:{props.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value={quantity} onChange = {(e)=>setQuantity(e.target.value)}/>
                    </div>
                    <button class="card-button" onClick = {handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}