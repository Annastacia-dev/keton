const Corporate = () => {
  return (
    <div className="h-full flex flex-col justify-center items-start bg-primaryBg py-16 sm:px-20 px-4">
      <h1 className="uppercase sm:text-2xl text-xl font-bold mb-4 mx-2">
        WE ARE SETTING STANDARD WITH THE TOP NOTCH CONSULTANCY
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-4 mt-4">
        <div className="col-span-1">
          <hr className="w-20  border-2 border-primaryGreen rounded my-1" />
          <h2 className="uppercase sm:text-2xl font-medium mt-2">
            CORPORATE BASED
          </h2>
          <ul className="text-left mt-8 text-sm leading-6 list-disc flex flex-col gap-4 px-6">
            <li>Strategic Analysis and Planning</li>
            <li>Business Intelligence and Monitoring</li>
            <li>Trade Exhibition</li>
            <li>Company Representation</li>
          </ul>
          <div className="flex sm:flex-row flex-col gap-4 mt-10">
            <button className="bg-primaryGreen text-white py-2 px-4 rounded-md capitalize text-sm font-medium">
              Inquire about Service
            </button>
            <button className="bg-primaryGreen text-white py-2 px-4 rounded-md capitalize text-sm font-medium mt-4 sm:mt-0">
              Get a quote
            </button>
          </div>
        </div>

        <div className="col-span-1">
          <img
            src="https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595646/Keton/Keton_Consulting61_gvtbay.jpg"
            alt="consulting-4"
            className="w-full h-full rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Corporate;
