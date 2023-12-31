import { useLoaderData } from "react-router-dom";
import BrandPageCardMaking from "./BrandPageCardMaking";
import { useEffect } from "react";
import { useState } from "react";

const Samsung = () => {
  const products = useLoaderData();

  const brandname = "samsung";

  const [samsungCard, setsamsungCard] = useState([])

    useEffect(()=>{
      const samsungCard = products.filter(entry => entry.brandName === "samsung");
      setsamsungCard(samsungCard);
    },[products])

  return (
    <div>
      {/* advertise in banner */}
      <div className="">
        <div className="carousel w-full h-[400px]">
          <div id="item1" className="carousel-item w-full">
            <img
              src="data:image/jpeg;base64,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"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://img.global.news.samsung.com/in/wp-content/uploads/2019/02/295-A-Series-KV-Banner-36x24inch-e1551339667384.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7O3VwnD9bqppv2wkacm01JpRg1x1GMQOFg0nFCJ80-k8bP7UyM3krw6Xisgjk2Fe974w&usqp=CAU"
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
      {samsungCard.length > 0 ? (
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

export default Samsung;
