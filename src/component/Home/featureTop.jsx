const featureCafe = ({ title, des, img, featureindex }) => {
  return (
    <div className="lg:h-[550px] md:grid-cols-2 md:h-[450px] relative w-full h-[560px] bg-[rgba(233,216,199,255)] me-9 grid grid-cols-1">
      {featureindex % 2 == 0 ? (
        <>
          <div
            data-aos="fade-down"
            className="lg:h-[550px] md:h-[450px] w-full h-[250px] flex justify-center items-center"
          >
            <img
              src={img}
              alt=""
              className="object-contain w-1/2 h-full md:w-full"
            />
          </div>
          <div
            data-aos="fade-down"
            className="md:relative md:top-0 md:justify-center justify-center md:items-start md:h-full w-full h-[340px] items-center absolute top-[215px] flex flex-col px-10"
          >
            <h1 className="lg:text-5xl md:text-3xl text-2xl text-black font-bold font-['poppins']">
              {title}
            </h1>
            <p className="xl:text-lg text-sm text-gray-800 font-['poppins'] my-5">
              {des}
            </p>
            <button className=" md:h-[40px] py-5 px-7 mb-5 flex justify-center items-center w-fit h-[30px] relative rounded-[20px] bg-[rgb(71,51,38)] hover:bg-[rgb(80,60,50)] text-white font-bold text-lg font-['poppins']">
              Discover More
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            data-aos="fade-down"
            className="md:relative md:top-0 md:justify-center justify-center md:items-start md:h-full w-full h-[340px] items-center absolute top-[215px] flex flex-col px-10"
          >
            <h1 className="lg:text-5xl md:text-3xl text-2xl text-black font-bold font-['poppins']">
              {title}
            </h1>
            <p className="xl:text-lg text-sm text-gray-800 font-['poppins'] my-5">
              {des}
            </p>
            <button className="md:h-[40px] py-5 px-7 mb-5 flex justify-center items-center w-fit h-[30px] relative rounded-[20px] bg-[rgb(71,51,38)] hover:bg-[rgb(80,60,50)] text-white font-bold text-lg font-['poppins']">
              Discover More
            </button>
          </div>
          <div
            data-aos="fade-down"
            className="lg:h-[550px] md:h-[450px] w-full h-[250px] flex justify-center items-center"
          >
            <img
              src={img}
              alt=""
              className="object-contain w-1/2 h-full md:w-full"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default featureCafe;
