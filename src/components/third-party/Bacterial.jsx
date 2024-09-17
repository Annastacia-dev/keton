import Header from './Header';

const Bacterial = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center gap-4 p-6 bg-primaryBg">
        <>
          <h1 className="text-2xl capitalize mb-4 px-4">Bacterial control</h1>
          <div className="flex flex-col justify-center  bg-primaryBlue rounded-full h-10">
            <h1 className="text-md font-bold text-black capitalize p-4 ml-2">
              Bacterial control
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-2 text-sm mt-4 w-3/4 leading-6 px-4">
              <p>Lyophilized organisms.</p>
              <br />
              <p>
                CultiControl microorganisms are lyophilized, reference stock
                culture preparations containing a single strain of a
                microorganism. These microorganism preparations are intended to
                be used for quality control of culture media,
                educational/instructional programs and industrial applications.
                The microorganism preparations are derived from ATCC® (American
                Type Culture Collection) and NCTC® (National Collection of Type
                Cultures, operated by the UK Health Security Agency (UKHSA)).
                CultiControl microorganisms are packaged in a resealable vial
                that contains five (5) lyophilized pellets of a single
                microorganism strain and a desiccant to prevent adverse
                accumulations of moisture.
              </p>
              <br />
              <p>
                Quanti-CultiControl are lyophilized, quantitative microorganism
                preparations to be used in industrial laboratories for Quality
                Control purposes. Processed as directed, these preparations
                provide a challenge of &lt; 100 CFU per 0.1 mL, which is a
                concentration usually suitable for several pharmaceutical
                applications, including growth promotion testing of culture
                media to be employed in sterility testing. These microorganism
                preparations are derived from the American Type Culture
                Collection (ATCC®).
              </p>
              <br />
              <p>
                Quanti-CultiControl are suitable for the Growth Promotion Test
                recommended by the international Pharmacopoeiae, without need of
                intermediate dilution steps, since each rehydrated suspension
                generates less than 100 UFC for 0.1 mL inoculum. Each suspension
                (1 mL) allows 10 inocula.
              </p>
            </div>
            <div className="col sm:col-span-1 flex flex-col">
              <div className="relative bg-primaryBlue">
                <div className="absolute left-20 bg-primaryBlue w-[55%] sm:h-[19rem] rounded-xl sm:block hidden"></div>
                <div className="sm:absolute">
                  <img
                    src="https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699596286/Keton/Rectangle_227_hsmhjx.png"
                    alt="logo"
                    className="w-3/4 h-3/4 rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Bacterial;
