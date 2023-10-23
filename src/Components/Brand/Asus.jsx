import { useLoaderData } from "react-router-dom";
import BrandPageCardMaking from "./BrandPageCardMaking";
import { useEffect } from "react";
import { useState } from "react";

const Asus = () => {
  const products = useLoaderData();

  const [asusCard, setasusCard] = useState([])

    useEffect(()=>{
      const asusCard = products.filter(entry => entry.brandName === "asus");
      setasusCard(asusCard);
    },[products])

  const brandname = "asus";

  return (
    <div>
      {/* advertise in banner */}
      <div className="">
        <div className="carousel w-full h-[400px]">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://i.ytimg.com/vi_webp/z8yWc71IL_k/maxresdefault.webp"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://m.media-amazon.com/images/S/aplus-media/vc/cf493041-85f2-47d2-89b4-e43b13090161.__CR0,0,970,300_PT0_SX970_V1___.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://i.ytimg.com/vi/jKHfZbamays/mqdefault.jpg"
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
      asusCard.length > 0 ? (
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

export default Asus;
