
import Swal from "sweetalert2";
import AddtoCartPage1 from "../AddToCart/AddtoCartPage1";

const DetailsCardMake = ({ data }) => {

  const handleAddCart = (dataId) => {
    <AddtoCartPage1 dataId ="dataId" ></AddtoCartPage1>
    
  };

  return (
    <div className="w-full">
      <div className=" w-4/5 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={data.productImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-6xl text-purple-700 ">
            {data.productName}
            <div className="badge badge-secondary">special</div>
          </h2>
          <p className="italic">{data.description}</p>
          <div className="card-actions justify-end">
            <div className=" badge badge-outline">{data.price}</div>
          </div>
        </div>

        <button
          onClick={() => handleAddCart(data._id)}
          className="btn block mx-auto btn-success"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DetailsCardMake;
