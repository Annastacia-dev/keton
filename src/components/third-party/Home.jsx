import Header from './Header';
const Home = () => {
  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 p-4 bg-primaryBg">
        <div className="flex flex-col px-10 gap-12 mt-12">
          <div>
            <h1 className="text-2xl font-bold capitalize ">
              Third Party Controls
            </h1>
            <p className="text-sm mt-4 w-3/4 leading-6">
              ISO 15189:2022 clause 7.3.7.2 &apos; the use of third party IQC
              material should be considered either as an alternative to, or in
              addition to, control materials supplied by reagent or instrument
              manufacturer&apos;&apos; We provide a variety of third party IQC
              -Heamatology, chemistry, immunoassay, Infectious diseases and
              molecular
            </p>
          </div>

          <div>
            <h1 className="text-2xl font-bold capitalize ">key benefits</h1>
            <ul className="text-sm mt-4 w-3/4 leading-6 list-disc flex flex-col gap-3">
              <li>Third party controls</li>
              <li>Multi level and assayed</li>
              <li>Compliant with CLIA-88 regulations</li>
            </ul>
          </div>

          <div>
            <hr className="sm:w-80  border-4 border-primaryGreen rounded-xl my-3" />
            <h1 className="text-2xl font-bold uppercase ">
              keton third party controls
            </h1>
            <div className="flex flex-col gap-3 text-sm mt-4 w-3/4 leading-6">
              <p>Haematology Controls</p>
              <p>Bacterial Control</p>
              <p>Clinical Chemistry & Serology</p>
              <p>Coagulation Controls</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mb-4">
          <div className="relative">
            <div className="absolute right-40 bg-primaryBlue w-11/12 sm:h-[18rem] rounded-lg sm:block hidden"></div>
            <img
              src="https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699594862/Keton/Keton_Consulting17_t3zvqv.jpg"
              alt="mission"
              className="w-72 h-72 object-cover rounded-lg sm:absolute bottom-40 right-40"
              loading="lazy"
            />
            <img
              src="https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595568/Keton/keton_new_b8mgow.jpg"
              alt="vision"
              className="w-72 h-72 object-cover rounded-lg sm:mt-40 -mt-10 ml-10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
