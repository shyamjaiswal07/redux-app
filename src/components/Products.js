import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

const Products = () => {
const dispatch = useDispatch()
const {data: products, status} = useSelector((state)=>state.product)
//   const [products, setProducts] = useState([]);

  useEffect(() => {

    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    // //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };

if(status === STATUSES.LOADING){
    return <h2>Loading ......</h2>
}
if(status === STATUSES.ERROR){
    return <h2>Somthing went Wrong .......</h2>;
}

  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
