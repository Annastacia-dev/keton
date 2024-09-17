const Mission = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-l from-primaryBlue/40 to-transparent h-full flex flex-col justify-center items-center py-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="col-span-1 px-10 flex justify-center items-center">
            <div className="relative">
              <div className="absolute right-40 bg-primaryBlue w-11/12 sm:h-[18rem] rounded-lg sm:block hidden"></div>
              <img
                src="https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595384/Keton/Keton_Consulting50_jhy6v1.jpg"
                alt="mission"
                className="w-72 h-72 object-cover rounded-lg sm:absolute bottom-40 right-40"
                loading="lazy"
              />
              <img
                src="https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699594928/Keton/Keton_Consulting18_cchpnz.jpg"
                alt="vision"
                className="w-72 h-72 object-cover rounded-lg sm:mt-40 -mt-10 ml-10"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-span-1 sm:px-4 px-16">
            <div>
              <h2 className="capitalize sm:text-xl font-bold mt-2">mission</h2>
            </div>
            <p className="text-left text-sm font-normal mt-4 leading-6 sm:w-8/12">
              To create communities where people continually expand their
              capacity to create the results they truly desire, where new and
              expansive patterns of thinking are nurtured and collective
              aspiration is set free for better healthcare outcomes.
            </p>

            <div className="mt-10">
              <h2 className="capitalize sm:text-xl font-bold mt-2">vision</h2>
            </div>
            <p className="text-left text-sm font-normal mt-4 leading-6 sm:w-8/12">
              A leading bio-medicine consultancy firm that creates solutions
              through simplicity, innovation, freedom and excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
