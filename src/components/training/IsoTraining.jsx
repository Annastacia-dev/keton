import IsoCourses from './IsoCourses';
import Header from './Header';

const IsoTraining = () => {
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
              src="https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595699/Keton/Lab_Tecs7_ivrojt.jpg"
              alt="training"
              className="w-full h-96 rounded object-cover"
              loading="lazy"
            />
          </div>

          <div className="col-span-2">
            <hr className="w-20  border-2 border-primaryGreen rounded my-1" />
            <h2 className="uppercase sm:text-2xl font-medium mt-2">
              ISO TRAININGS
            </h2>
            <div className="text-left mt-8 text-sm leading-6">
              ISO refers to a set of standards that deal with establishing and
              maintaining an effective quality management system. Some ISO
              standards generally addresses the fundamentals of a quality
              management system, while some specifies the requirements that an
              organization must meet.
            </div>
            <div className="flex sm:flex-row flex-col gap-4 mt-10">
              <button className="bg-primaryGreen text-white py-2 px-4 rounded-md capitalize text-sm font-medium">
                Inquire about training
              </button>
            </div>
          </div>
        </div>
      </div>
      <IsoCourses />
    </>
  );
};

export default IsoTraining;
