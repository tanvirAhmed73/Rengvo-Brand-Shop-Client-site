import { useLoaderData } from "react-router-dom";
import BrandPageCardMaking from "./BrandPageCardMaking";

const Apple = () => {

    const products = useLoaderData();

    const brandname = "apple";

    return (
        <div>
            <div>
                
            </div>

            <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-10 ">



                {
                    products.map(product => <BrandPageCardMaking key={product._id} brandname={brandname} product={product}></BrandPageCardMaking>)
                }
            </div>
        </div>
    );
};

export default Apple;