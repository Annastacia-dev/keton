const services = [
  'Gap Analysis for ISO/IEC 17043:2023,ISO 17025:2017, ISO 15189:2022',
  'Accreditation Mentorship for ISO/IEC 17043:2010, 17025:2017 and 15189:2012',
  'Kenya Quality Model for Health',
  'Joint Inspection Checklist',
  'Baseline Survey',
  'Midterm Evaluation',
  'Endline Evaluation',
  'Monitoring and Evaluation',
  'Pre-certification Audit for ISO 9001:2015',
  'Writing SOPs and Documentation',
  'Project Planning and Management',
  'Professional Building Design for Health Facilities',
];

const Services = () => {
  return (
    <div className="h-full flex flex-col justify-center items-start bg-primaryBg py-10 px-4">
      <h1 className="uppercase sm:text-2xl text-xl font-bold mb-4 ml-6">
        PROVIDING YOU WITH THE BEST SERVICES AND CONSULTING.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-20 gap-4 mt-4 sm:px-10">
        <div className="col-span-1">
          <img
            src="https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595384/Keton/Keton_Consulting50_jhy6v1.jpg"
            alt="consulting-2"
            className="w-full h-full rounded object-cover"
          />
        </div>

        <div className="col-span-2">
          <hr className="w-20  border-2 border-primaryGreen rounded my-1" />
          <h2 className="uppercase sm:text-2xl font-semibold mt-2">
            mentorship & consultancy
          </h2>
          <ul className="text-left mt-8 text-sm leading-6 list-disc flex flex-col gap-4 px-6">
            {services.map((service) => {
              return (
                <li key={service} className="capitalize">
                  {service}
                </li>
              );
            })}
          </ul>
          <div className="flex sm:flex-row flex-col gap-4 mt-10">
            <button className="bg-primaryGreen text-white py-2 px-4 rounded-md capitalize text-sm font-medium">
              Inquire about Service
            </button>
            <button className="bg-primaryGreen text-white  py-2 px-4 rounded-md capitalize text-sm font-medium mt-4 sm:mt-0">
              Get a quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
