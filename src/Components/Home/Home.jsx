import { Link, NavLink } from "react-router-dom";

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

        {/* more  product */}
        <div className="mt-9 lg:w-4/5 pb-28 mx-auto bg-slate-700 text-center ">
            <h1 className=" pt-9 text-4xl font-bold drop-shadow-xl text-black italic ">Our Gallery</h1>
            <div  className="grid grid-cols-1 pt-9  justify-center md:grid-cols-2 lg:grid-cols-5">
                <img className="w-[235px] h-[235px] ml-[90px] md:ml-[70px] lg:ml-1 mt-1" src="data:image/jpeg;base64,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" alt="" />
                <img className="w-[235px] h-[235px] ml-[90px] md:ml-[70px] lg:ml-1 mt-1" src="https://www.cnet.com/a/img/resize/e6ebb7c25c900b54530ce8f99fcbc0eb81740c11/hub/2015/12/09/9a414a43-5f79-4926-b04f-9485ff0d4b11/sony-morpheus.jpg?auto=webp&width=1200" alt="" />
                <img className="w-[235px] h-[235px] ml-[90px] md:ml-[70px] lg:ml-1 mt-1" src="data:image/jpeg;base64,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" alt="" />
                <img className="w-[235px] h-[235px] ml-[90px] md:ml-[70px] lg:ml-1 mt-1" src="data:image/jpeg;base64,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" alt="" />
                <img className="w-[235px] h-[235px] ml-[90px] md:ml-[70px] lg:ml-1 mt-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6lAj8Fe0bbwX6a368FZ03_vJvafsst34Un1naaBUmRZY0oPT2mcCVzlvPWq6Zfsp190&usqp=CAU" alt="" />
            </div>
            <button className="btn mt-4"><NavLink to={'/'}>View More</NavLink></button>

        </div>


        {/* banner */}
      <div className="mt-5">
        <div
          className="hero  lg:w-4/5 mx-auto h-80"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/gradient-texture-technology-sale-background_23-2149070474.jpg)", 
          }}
        >
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">Join Us Now</h1>
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      </div>




    </div>


      
  );
};

export default Home;
