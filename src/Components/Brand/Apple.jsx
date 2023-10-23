import { useLoaderData } from "react-router-dom";
import BrandPageCardMaking from "./BrandPageCardMaking";
import { useEffect } from "react";
import { useState } from "react";

const Apple = () => {
  const products = useLoaderData();

  const brandname = "apple";

  const [appleCard, setappleCard] = useState([])

    useEffect(()=>{
      const appleCard = products.filter(entry => entry.brandName === "apple");
      setappleCard(appleCard);
    },[products])

  return (
    <div>
      {/* advertise in banner */}
      <div className="">
        <div className="carousel w-full h-[400px]">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://i.pinimg.com/originals/18/33/cc/1833cc955726fbb5faa48c2e577bfcf0.png"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoAWZ6rsycJpin5oi0f1YkBqdeqAoAYhwhDDTA-fr3oEvjEIeHWzTxhNf_GASil4e-nY&usqp=CAU"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://invent.irujul.com/theme/default/img/npi/npi-20/watch_2020.jpg"
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

      {appleCard.length > 0 ? (
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
      )}
    </div>
  );
};

export default Apple;
