import Swal from "sweetalert2";

const AddToCartMaking = ({ addProduct }) => {
  const {
    _id,
    productName,
    brandName,
    productImage,
    price,
    description,
    catagory,
    rating,
  } = addProduct;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-store-server-l1y6spdbz-tanvirs-projects-23a7939e.vercel.app/product/${_id}`,{
          method : "DELETE",

        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              )
              window.location.reload();
            }
          });
      }
    });
  };

  return (
    <div className="card   card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className="md:h-[200px] lg:h-[100px]"
          src={productImage}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2>{productName}</h2>
        <button className="btn h-[20px] btn-primary">Buy Now</button>
        <button onClick={() => handleDelete(_id)} className="btn btn-primary">
          Delete
        </button>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default AddToCartMaking;
