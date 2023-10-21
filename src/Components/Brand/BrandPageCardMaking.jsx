const BrandPageCardMaking = ({ product, brandname }) => {
  if (brandname === product.brandName) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto justify-center">
        <figure><img src={product.productImage} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.productName}
            <div className="badge badge-secondary">{product.brandName}</div>
            <div className="badge badge-secondary">{product.catagory}</div>
          </h2>
          <p>{product.description}?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.price}</div> 
            <div className="badge badge-outline">{product.rating}</div>
          </div>
        </div>
        <button className="btn">Details</button>
      </div>
    );
  }
};

export default BrandPageCardMaking;
