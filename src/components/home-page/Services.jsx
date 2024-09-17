import { BsCart } from 'react-icons/bs';
import { MdOutlineMedicalServices } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';
import StatisticsCard from './StatisticsCard';

const cards = [
  {
    id: 1,
    icon: <BsCart />,
    title: 'Keton Products',
    description:
      'We offer a wide range of products ranging from clinical lab, molecular, research equipment and laboratory quality essentials like EQA, IQC and linearity controls.',
  },
  {
    id: 2,
    icon: <MdOutlineMedicalServices />,
    title: 'Keton Services',
    description:
      "Keton is renowned for offering exceptional technical support services to it's various clients globally.",
  },
  {
    id: 3,
    icon: <HiUserGroup />,
    title: 'Keton Training',
    description:
      'Keton Consulting is the leading biomedicine firm that offers different ISO/IEC based trainings, mentorship and consultancies in Africa.',
  },
];

const Services = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-primaryBg py-28 relative">
      <StatisticsCard />
      <div className="text-center mt-24">
        <h1 className="capitalize sm:text-md text-base font-light">
          our services
        </h1>
        <h2 className="capitalize sm:text-3xl font-bold mt-2">what we do</h2>
        <hr className="w-20 mx-auto border-2 border-primaryGreen rounded my-1" />
      </div>

      <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-10 mt-16 px-10">
        {cards.map((card) => (
          <div key={card.id} className="bg-white shadow-lg rounded-lg p-4">
            <div className="flex justify-center items-center relative">
              <div className="text-2xl text-white bg-primaryBlue w-12 h-12 flex justify-center items-center rounded-full absolute -top-10">
                {card.icon}
              </div>
            </div>
            <div className="text-center sm:mt-24 mt-10 mb-10">
              <h3 className="text-xl font-semibold capitalize">{card.title}</h3>
              <p className="text-gray-500 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 px-10">
        <h1 className="uppercase sm:text-2xl text-xl font-bold mb-10">
          PROVIDING YOU WITH THE BEST SERVICES AND TRAINING.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
          <div className="col-span-1 flex flex-col items-start gap-6">
            <h1 className="text-[200px] text-primaryBlue font-bold text-left">
              06
            </h1>
            <h6 className="font-medium capitalize mt-2 text-sm text-left">
              Years of Service
            </h6>
            <p className="text-left mt-2 text-xl leading-6">
              In a world of pandemics, epidemics and chronic ailments lies
              quality laboratory solutions provided by Keton Group of companies.
              We translate the voice of customers in the suit of products and
              services that we provide ,covering the whole eco system of
              laboratory medicine.
            </p>
          </div>

          <div className="col-span-1 flex flex-col">
            <img
              src="https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699596427/Keton/Mask_group_ve75g6.png"
              alt="logo"
              className="w-full h-full rounded-lg"
            />
          </div>

          <div className="col-span-1 flex flex-col">
            <h2 className="capitalize sm:text-xl font-bold mt-2">who we are</h2>
            <hr className="w-20 ml-4 border-2 border-primaryGreen rounded my-1" />

            <p className="text-left mt-2 text-xl w-10/12 leading-6">
              Keton Consulting Limited is a multiagency biomedicine supply &
              service firm grounded on creating communities where people
              continually expand their capacity to create the results they truly
              desire, where new and expansive patterns of thinking are nurtured,
              where collective aspiration is set free, and where people are
              continually learning to see the whole together. We believe the
              pulse of a strong institution lies in vibrant communities,
              continuous learning, receptive human resource and a management
              that listens and seeks advice. We are committed on sustainablilty
              through following the framework of ESG (Environmental, Social and
              Governance) in our operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
