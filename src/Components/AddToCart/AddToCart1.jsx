import { useLoaderData } from "react-router-dom";
import AddToCartMaking from "./AddToCartMaking" 
import { useState } from "react";
import { useEffect } from "react";
const AddToCart1 = () => {
    const product = useLoaderData();

    // const [data, setData] = useState(product)
    const [withAddToCart, setwithAddToCart] = useState([])

    useEffect(()=>{
      const withCart = product.filter(entry => entry.addCart);
      setwithAddToCart(withCart);
    },[product])
    return (
        // making add to cart card
        <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        {withAddToCart.map((addProduct) => (
          <AddToCartMaking
            key={addProduct._id}
            addProduct={addProduct}
          ></AddToCartMaking>
        ))}
      </div>
    );
};

export default AddToCart1;