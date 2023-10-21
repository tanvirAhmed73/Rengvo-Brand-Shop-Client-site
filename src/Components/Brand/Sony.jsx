import { useLoaderData } from "react-router-dom";
import BrandPageCardMaking from "./BrandPageCardMaking";

const Sony = () => {
    const products = useLoaderData();

    const brandname = "sony";

    return (
        <div className="">
            <h1>{brandname}</h1>
            {
                products.map(product => <BrandPageCardMaking key={product._id} brandname={brandname} product={product}></BrandPageCardMaking>)
            }
        </div>
    );
};

export default Sony;