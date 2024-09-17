const Quote = () => {
  return (
    <>
      <header
        className="bg-cover bg-top sm:h-[16rem] h-[20rem] flex flex-col justify-start items-start text-black bg-no-repeat relative"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595663/Keton/Lab_Tecs4_dxylvi.jpg')`,
        }}
      >
        <div className="absolute top-0 left-0 w-full sm:h-[16rem] h-[20rem] bg-primaryBlue opacity-80"></div>
        <div className="relative z-8  md:mt-40 mt-52 sm:ml-8 ml-4 text-white px-10">
          <h1 className="md:text-4xl text-lg font-bold uppercase mt-2">
            <p>get quote</p>
          </h1>
        </div>
      </header>
      <div className="flex sm:flex-row flex-col justify-center items-center gap-12 sm:px-28 px-4 sm:py-20 py-10 bg-primaryBg">
        <form className="flex flex-col gap-4 w-[54%]">
          <div className="flex flex-col  sm:flex-row gap-4">
            <div className="flex flex-col gap-4">
              <label className="text-sm font-semibold" htmlFor="firstName">
                Name
                <span className="text-red-500">*</span>
              </label>
              <input
                className="border border-gray-300 px-4 py-2 bg-transparent"
                type="text"
                name="firstName"
                id="firstName"
                required
              />
              <p className="text-sm text-primaryBlue">First</p>
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-sm font-semibold" htmlFor="lastName">
                &nbsp;
              </label>
              <input
                className="border border-gray-300 px-4 py-2 bg-transparent"
                type="text"
                name="lastName"
                id="lastName"
                required
              />
              <p className="text-sm text-primaryBlue">Last</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-sm font-semibold" htmlFor="email">
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 px-4 py-2 bg-transparent"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-sm font-semibold" htmlFor="phoneNumber">
              Phone Number
              <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 px-4 py-2 bg-transparent"
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-sm font-semibold" htmlFor="item">
              Item interested in?
              <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 px-4 py-2 bg-transparent"
              type="text"
              name="item"
              id="item"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-sm font-semibold" htmlFor="location">
              Region/County/City
            </label>
            <input
              className="border border-gray-300 px-4 py-2 bg-transparent"
              type="text"
              name="location"
              id="location"
            />
          </div>
          <button className="bg-primaryGreen text-white px-4 py-2 mt-10">
            Submit
          </button>
        </form>
        <div>
          <img
            src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1695229549/genrui_msaq5r.png"
            alt="quote"
          />
        </div>
      </div>
    </>
  );
};

export default Quote;
