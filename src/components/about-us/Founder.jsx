const Founder = () => {
  return (
    <div className="h-full flex justify-center items-center bg-primaryBg sm:py-16 py-5">
      <div className="md:px-8 md:mx-10 mx-4 bg-white rounded flex  justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1 flex flex-col items-center mt-8 px-6">
            <hr className="w-20 mx-auto border-2 border-primaryGreen rounded my-1" />
            <h2 className="capitalize sm:text-2xl font-bold">
              Who is Antony Jaccodul?
            </h2>
            <p className="text-center mt-6 text-sm leading-6 pb-10">
              The CEO and founder of KETON, A thought leader, dedicated to
              expanding advances in laboratory medicine from a global view of
              best practices into health systems and value chains, translating
              into customer delights. Creating the laboratory of the future with
              Africa in mind drove Antony; to constantly think about curating
              the passion for quality laboratory services into provision of
              end-to-end laboratory solutions where every client would convert
              questions marks into solutions whenever they knocked our door.
              This has come to pass with our one stop shop principle in
              provision of laboratory services and products from training,
              mentorship, EQA, third party controls, method verification
              controls, molecular and clinical laboratory equipment plus
              consumables to software development for RCA and LIMS, laboratory
              infrastructure design and laboratory hardware. Hence our mantra{' '}
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              "We deliver quality lab solutions."
            </p>
          </div>
          <div className="col sm:col-span-1 flex flex-col">
            <div className="relative">
              <div className="absolute left-20 bg-primaryBlue w-11/12 sm:h-[28rem] rounded-lg sm:block hidden"></div>
              <div className="sm:absolute">
                <img
                  src="https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699596428/Keton/Rectangle_38_s3yqng.png"
                  alt="logo"
                  className="w-11/12 h-3/4 rounded-lg "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
