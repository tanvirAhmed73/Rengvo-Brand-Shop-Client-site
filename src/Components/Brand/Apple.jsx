import { useLoaderData } from "react-router-dom";
import BrandPageCardMaking from "./BrandPageCardMaking";

const Apple = () => {

    const products = useLoaderData();

    const brandname = "apple";

    return (
        <div className="">
            <h1>{brandname}</h1>
            {
                products.map(product => <BrandPageCardMaking key={product._id} brandname={brandname} product={product}></BrandPageCardMaking>)
            }
        </div>
    );
};

export default Apple;