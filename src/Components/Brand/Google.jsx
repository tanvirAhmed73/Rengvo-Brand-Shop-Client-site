import { useLoaderData } from "react-router-dom";
import BrandPageCardMaking from "./BrandPageCardMaking";

const Google = () => {
    const products = useLoaderData();

    const brandname = "google";

    return (
        <div className="">
            <h1>{brandname}</h1>
            {
                products.map(product => <BrandPageCardMaking key={product._id} brandname={brandname} product={product}></BrandPageCardMaking>)
            }
        </div>
    );
};

export default Google;