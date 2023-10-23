import { useLoaderData } from "react-router-dom";
import BrandPageCardMaking from "./BrandPageCardMaking";
import { useState } from "react";
import { useEffect } from "react";

const Sony = () => {
  const products = useLoaderData();

  const brandname = "sony";

  const [sonyCard, setsonyCard] = useState([]);

  useEffect(() => {
    const sonyCard = products.filter((entry) => entry.brandName === "sony");
    setsonyCard(sonyCard);
  }, [products]);

  return (
    <div>
      {/* advertise in banner */}
      <div className="">
        <div className="carousel w-full h-[400px]">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/dca23476785161.5c7459cb90153.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnM92T81iNZt56XU9hh1IOMaQad1buqVZ5xXzrnKDHEr9ZrpCXkGVRBt_YfT5Qbut7EOY&usqp=CAU"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://cdn.tgdd.vn/Files/2020/06/05/1260888/so-huu-bo-qua-tang-dang-cap-dat-truoc-tivi-sony-br-1.png"
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
      {sonyCard.length > 0 ? (
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

export default Sony;
