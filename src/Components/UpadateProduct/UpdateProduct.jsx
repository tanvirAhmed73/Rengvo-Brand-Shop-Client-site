import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();

  const {_id, productName, brandName, productImage, price, description, catagory, rating} =product;
  
  const handleUpdateproduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productImage = form.productImage.value;
    const price = form.price.value;
    const description = form.description.value;
    const catagory = form.catagory.value;
    const rating = form.rating.value;

    const updatedProduct = {
      productName,
      brandName,
      productImage,
      price,
      description,
      catagory,
      rating,
    };

    // send data to the server
    fetch(`https://brand-store-server-3aeoqr1xz-tanvirs-projects-23a7939e.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product updated successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="mx-auto justify-center">
        <div className=" flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="text-7xl mx-auto justify-center text-center">
            Update Product : {productName}
          </div>
          {/* form */}
          <form
            onSubmit={handleUpdateproduct}
            className=" mx-auto justify-between lg:p-11 lg:grid lg:grid-cols-2 gap-7 w-max"
          >
            {/* Product Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Product-Name"
                name="productName"
                defaultValue={productName}
                className="input input-bordered"
                required
              />
            </div>

            {/* product Brand Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="Brand-Name"
                name="brandName"
                defaultValue={brandName}
                className="input input-bordered"
                required
              />
            </div>

            {/* product Image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image Url</span>
              </label>
              <input
                type="text"
                defaultValue={productImage}
                name="productImage"
                required
              />
            </div>

            {/* Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                defaultValue={price}
                name="price"
                className="input input-bordered"
                required
              />
            </div>

            {/* Short description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <textarea
                className="mt-3 p-3"
                name="description"
                defaultValue={description}
                rows="1"
                cols="50"
                placeholder="Write a Short Description"
              ></textarea>
            </div>

            {/* catagories-type */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input
                type="text"
                name="catagory"
                defaultValue={catagory}
                placeholder="type"
                className="input input-bordered"
              />
            </div>

            {/* Rating */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Rating"
                className="input input-bordered"
              />
            </div>

            {/* Add Product */}
            <div className="form-control lg:mt-9">
              <button className="btn btn-primary">Update Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
