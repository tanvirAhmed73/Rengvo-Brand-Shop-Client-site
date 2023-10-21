import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
      {/* banner */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/7WvFXGm/colorful-abstract-shape-technology-background-vector.jpg)",
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl lg:text-9xl text-white font-bold">
              Welcome To "<span className="text-green-900">Rengvo</span>"
            </h1>
          </div>
        </div>
      </div>

      {/* brand section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  items-center">
          <div className="mt-6 justify-center mx-auto">
          <Link to={"/apple"}>
            <div className="card w-80 h-80 bg-green-900 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center justify-center text-5xl text-yellow-500">
                  Apple
                </h2>
              </div>
              <figure>
                <img
                  className="w-max"
                  src="https://i.ibb.co/fDb15Kn/Apple-Ericsson.jpg"
                  alt="Shoes"
                />
              </figure>
            </div>
          </Link>
          </div>


        <div className="mt-6">
        <Link to={"/samsung"}>
          <div className="card w-80 h-80 justify-center mx-auto  bg-green-900 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-center justify-center text-5xl text-yellow-500">
                Samsung
              </h2>
            </div>
            <figure>
              <img
                className="w-max"
                src="https://i.ibb.co/rv9xy6D/images-q-tbn-ANd9-Gc-T3-Yioz-Kr-DNk-MKf-Fjj-Rn-TIf-IHf-Tc5-IP9-QMq-TA-usqp-CAU.png"
                alt="Shoes"
              />
            </figure>
          </div>
        </Link>
        </div>


        
        <div className="mt-6">
        <Link to={"/sony"}>
          <div className="card w-80 h-80 justify-center mx-auto bg-green-900 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-center justify-center text-5xl text-yellow-500">
                Sony
              </h2>
            </div>
            <figure>
              <img
                src="https://i.ibb.co/sKhvv1k/76a58d75-4c0f-4735-940c-030203609697.png"
                alt="Shoes"
              />
            </figure>
          </div>
        </Link>
        </div>

        
        <div className="mt-6">
        <Link to={"/google"}>
          <div className="card w-80 h-80 justify-center mx-auto bg-green-900 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-center justify-center text-5xl text-yellow-500">
                Google
              </h2>
            </div>
            <figure>
              <img
                src="https://i.ibb.co/swq0pKw/1-h-Pxaf-Oxd-Yp-YZEOKz-NIk-SP43-HXCNft-VJVttoo4ucl7rs-MASXW3-Xr6-Gl-XURCub-E1t-A-w3840-h2160-rw.webp"
                alt="Shoes"
              />
            </figure>
          </div>
        </Link>
        </div>


        <div className="mt-6">
        <Link to={"/intel"}>
          <div className="card w-80 h-80 justify-center mx-auto bg-green-900 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-center justify-center text-5xl text-yellow-500">
                Intel
              </h2>
            </div>
            <figure>
              <img src="https://i.ibb.co/SsZnZ19/intel-600.png" alt="Shoes" />
            </figure>
          </div>
        </Link>
        </div>


        
        <div className="mt-6">
        <Link to={"/asus"}>
          <div className="card w-80 h-80 justify-center mx-auto bg-green-900 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-center justify-center text-5xl text-yellow-500">
                Asus
              </h2>
            </div>
            <figure>
              <img src="https://i.ibb.co/VTjQ66H/79183.jpg" alt="Shoes" />
            </figure>
          </div>
        </Link>
        </div>


      </div>
    </div>
  );
};

export default Home;
