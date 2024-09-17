import BioMedicineCourses from './BioMedicineCourses';
import Header from './Header';

const programs = [
  'Biomedical Equipment Maintenance and Management course',
  'Biosafety and Biosecurity',
  'Patient Centred Care',
  'Infection Prevention and Control',
  'Good Clinical Laboratory Practices',
  'Advanced Root Cause Analysis and CAPA',
  'Method Validation and uncertainty of measurement',
  'Laboratory Management in Practice',
  'Risk Management',
  '5s Model and Continuous Quality',
];

const BioMedicine = () => {
  return (
    <>
      <Header />
      <div className="h-full flex flex-col justify-center items-start bg-primaryBg py-10 px-4">
        <h1 className="uppercase sm:text-2xl text-xl font-bold mb-4">
          PROVIDING YOU WITH THE BEST SERVICES AND TRAINING.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-20 gap-4 mt-4 sm:px-10">
          <div className="col-span-1">
            <img
              src="https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595425/Keton/Keton_Consulting47_lgelg3.jpg"
              alt="bio"
              className="w-full h-96 rounded object-cover"
              loading="lazy"
            />
          </div>

          <div className="col-span-2">
            <hr className="w-20  border-2 border-primaryGreen rounded my-1" />
            <h2 className="uppercase sm:text-2xl font-medium mt-2">
              bio medicine programs
            </h2>

            <ul className="text-left mt-8 text-sm leading-6 list-disc flex flex-col gap-4 sm:ml-0 ml-8">
              {programs.map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>
            <div className="flex sm:flex-row flex-col gap-4 mt-10">
              <button className="bg-primaryGreen text-white py-2 px-4 rounded-md capitalize text-sm font-medium">
                Inquire about training
              </button>
            </div>
          </div>
        </div>
      </div>
      <BioMedicineCourses />
    </>
  );
};

export default BioMedicine;
