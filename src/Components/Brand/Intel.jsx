import { useLoaderData } from "react-router-dom";
import BrandPageCardMaking from "./BrandPageCardMaking";
import { useEffect } from "react";
import { useState } from "react";

const Intel = () => {
  const products = useLoaderData();
  const [intelCard, setintelCard] = useState([])

    useEffect(()=>{
      const intelCard = products.filter(entry => entry.brandName === "intel");
      setintelCard(intelCard);
    },[products])


    const brandname = "intel";
  

  return (
    <div>
      {/* advertise in banner */}
      <div className="">
        <div className="carousel w-full h-[400px]">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://o.aolcdn.com/hss/storage/midas/70bb29e5cb695cd2d93bcc13783eab66/202423274/intel-skylake-desktop-2015-08-05-01.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwY-alUt0cA0g0yllaIXlvFHoCJp7xAT6kd3ru5XkUEDVpCKo_Xzo3OGxwUyK6OEB1LXg&usqp=CAU"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://i.ytimg.com/vi/v-KT59cYlEk/maxresdefault.jpg"
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

      { intelCard.length >0 ?

        <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {products.map((product) => (
            <BrandPageCardMaking
              key={product._id}
              brandname={brandname}
              product={product}
            ></BrandPageCardMaking>
          ))}
        </div> : <div><img  className="w-full h-screen" src="https://evgracias.com/images/no-products.jpg" alt="" /></div>
      }


    </div>
  );
};

export default Intel;
