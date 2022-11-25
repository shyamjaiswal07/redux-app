import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { remove } from '../store/cartSlice';
const Cart = () => {
    const items = useSelector(state => state.cart);
    const dispatch = useDispatch()
    const handleRemove=(ItemID)=>{
dispatch(remove(ItemID))
    }
  return (
    <div>
       <h3>Cart</h3>
       <div className="cartWrapper">
        {
            items.map((item)=>{
               return <div className="cartCard" key={item.id}>
                    <img src={item.image} alt="" />
                    <h5>{item.title}</h5>
                    <h5>{item.price}</h5>
                    <button onClick={()=>handleRemove(item.id)}>Remove</button>
                </div>
            })
        }
       </div>
    </div>
  )
}

export default Cart