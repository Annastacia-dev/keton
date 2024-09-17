const Summary = () => {
  return (
    <div className="h-full flex justify-center items-center bg-primaryBg py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="col-span-1 px-4">
          <div className="flex flex-col gap-8 px-12">
            <h2 className="uppercase sm:text-3xl text-xl font-bold mt-2">
              Get to know us better.
            </h2>
            <img
              src="https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595845/Keton/Lab_Tecs49_gprgn9.jpg"
              alt="mission"
              className="w-full sm:h-[30rem] h-[20rem] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="col-span-1 sm:px-4 px-12">
          <div>
            <h2 className="capitalize sm:text-2xl font-bold mt-16">
              Executive Summary
            </h2>
            <p className="font-light text-sm leading-6 sm:w-9/12 w-full mt-3">
              Our expertise lies in the deep knowledge and understanding of how
              to operate a modern clinical laboratory optimally both by
              equipment and the capacity of staff to produce reliable,
              reproducible, rapid quality laboratory reports for optimal patient
              care. We premise our work on the Intelligent methods wired with
              modern approaches divided into four strategic business units-
              Laboratory equipment supplies, ISO Based Training and capacity
              development,Laboratory quality essentials and Laboratory Hardware.
              This communicates effortlessly, buttressed by the requirements of
              ISO 15189:2022 of the risk-based and patient-centric approach of
              managing laboratory business.
            </p>
          </div>
          <div>
            <h2 className="capitalize sm:text-2xl font-bold mt-16">
              Corporate Governance
            </h2>
            <p className="font-light text-sm leading-6 sm:w-9/12 w-full mt-3">
              Keton has a board that meets four times a year to evaluate the
              organization on tenets of sustainability, accountability and
              transparency. The board has a good mix of expertise across the
              industry -finance, legal, Lab Medicine, Marketing and banking with
              all genders represented as a fit-for-purpose board. The Board
              Takes Matters ESG seriously and this guides most of the decisions
              on what to invest in, that protects the environment, communities
              with best governance practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
