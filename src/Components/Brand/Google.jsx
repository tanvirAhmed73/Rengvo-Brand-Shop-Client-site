import { useLoaderData } from "react-router-dom";
import BrandPageCardMaking from "./BrandPageCardMaking";
import { useEffect } from "react";
import { useState } from "react";

const Google = () => {
    const products = useLoaderData();

    const brandname = "google";

    const [googleCard, setgoogleCard] = useState([])

    useEffect(()=>{
      const googleCard = products.filter(entry => entry.brandName === "google");
      setgoogleCard(googleCard);
    },[products])


    return (
        <div>
          {/* advertise in banner */}
          <div className="">
            <div className="carousel w-full h-[400px]">
              <div id="item1" className="carousel-item w-full">
                <img
                  src="https://i.ytimg.com/vi/8HTN5xL__Rg/maxresdefault.jpg"
                  className="w-full"
                />
              </div>
              <div id="item2" className="carousel-item w-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrdfAO3uN0VEnjRfdu6Xo6wcpIMMdiSivV-2_P0nAZHVwlrfh7piHkpLzGX-ky6ffQnA&usqp=CAU"
                  className="w-full"
                />
              </div>
              <div id="item3" className="carousel-item w-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ArJf2YkcMyHdwWFpNJAhWhkxpnXX_84A69UN-XG-XBjBrS2gfqnI07ZspI2_x9LP3gA&usqp=CAU"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
            </div>
          </div>
    
          {/* card making */}
          {
      googleCard.length > 0 ? (
        <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {products.map((product) => (
            <BrandPageCardMaking
              key={product._id}
              brandname={brandname}
              product={product}
            ></BrandPageCardMaking>
          ))}
        </div>
      ) : (
        <div>
          <img
            className="w-full h-screen"
            src="https://evgracias.com/images/no-products.jpg"
            alt=""
          />
        </div>
      )
      }


        </div>
      );
};

export default Google;