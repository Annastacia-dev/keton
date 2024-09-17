import microcontrols from '../../data/microcontrols';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Header from './Header';

const Clinical = () => {
  const contentStyle = {
    maxWidth: '85%',
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
    background: 'rgba(0,0,0,0)',
    border: 'none',
    borderRadius: 'none',
    padding: '0',
  };

  const overlayStyle = {
    background: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(5px)',
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center gap-4 p-6 bg-primaryBg">
        <>
          <h1 className="text-2xl capitalize mb-4 px-4">
            Clinical Chemistry & Serology Controls
          </h1>
          <div className="flex flex-col justify-center  bg-primaryBlue rounded-full h-10">
            <h1 className="text-md font-bold text-black capitalize p-4 ml-2">
              Audit Microcontrols
            </h1>
          </div>
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-20 mt-8 px-6">
            {microcontrols.map((microcontrol) => (
              <div
                className="col sm:col-span-1 flex flex-col"
                key={microcontrol.id}
              >
                <img
                  src={microcontrol.image}
                  alt="logo"
                  className="w-3/4 h-3/4 rounded-lg"
                  loading="lazy"
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-sm  mt-2">{microcontrol.title}</p>
                  <Popup
                    key={microcontrol.id}
                    trigger={
                      <button className="bg-primaryGreen text-white text-sm px-4 py-2 rounded-lg mt-2">
                        Read More
                      </button>
                    }
                    modal
                    nested
                    position="center center"
                    closeOnDocumentClick
                    contentStyle={contentStyle}
                    overlayStyle={overlayStyle}
                  >
                    <div className="flex flex-col gap-2 bg-white">
                      <div className="flex justify-end mr-8">
                        <button
                          className="text-3xl outline-none"
                          onClick={close}
                        >
                          &times;
                        </button>
                      </div>
                      <div className="grid sm:grid-cols-2 grid-cols-1">
                        <div className="col-span-1 px-4">
                          <img
                            src={microcontrol.image}
                            alt="logo"
                            className="w-3/4 h-3/4 rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        <div className="col-span-1 flex flex-col gap-2 text-sm mt-4 w-3/4 leading-6 px-4">
                          <h1 className="text-xl capitalize mb-4 font-bold">
                            {microcontrol.title}
                          </h1>
                          {microcontrol.description &&
                            microcontrol.description.length > 0 && (
                              <>{microcontrol.description}</>
                            )}
                        </div>
                      </div>
                      <div className="px-8 py-4 text-sm leading-6">
                        {microcontrol.features &&
                          microcontrol.features.length > 0 && (
                            <div className="py-4">
                              <h4 className="text-md capitalize mb-4 font-bold">
                                Features
                              </h4>
                              {microcontrol.features.map((feature) => (
                                <p key={feature}>{feature}</p>
                              ))}
                            </div>
                          )}
                        {microcontrol.analytes &&
                          microcontrol.analytes.length > 0 && (
                            <>
                              <h4 className="text-md capitalize mb-4 font-bold">
                                analytes
                              </h4>
                              <ul className="list-disc list-inside">
                                {microcontrol.analytes.map((feature) => (
                                  <li key={feature}>{feature}</li>
                                ))}
                              </ul>
                            </>
                          )}
                      </div>
                    </div>
                  </Popup>
                </div>
              </div>
            ))}
          </div>
        </>

        <>
          <div className="flex flex-col justify-center  bg-primaryBlue rounded-full h-10 mt-10">
            <h1 className="text-md font-bold text-black capitalize p-4 ml-2">
              Diamex GmbH
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:h-[60vh]">
            <div className="flex flex-col gap-2 text-sm mt-4 w-3/4 leading-6 px-4">
              <p>
                The controls of the Optitrol and QConnect series are liquid
                single- or multi-analyte-controls and can be used to test the
                precision of laboratory systems. According to our ready-to-use
                concept the products may remain directly in the carrier or
                roboter of the test system. A manual refilling of the controls
                from the conventional dropper bottles into the vials of the
                carrier is no longer necessary. Relevant dead volumes therefore
                can be prevented.
              </p>
            </div>
            <div className="col sm:col-span-1 flex flex-col">
              <div className="relative sm:bg-primaryBlue">
                <div className="absolute left-20 bg-primaryBlue sm:w-[60%] sm:h-[22rem] rounded-xl sm:block"></div>
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

export default Clinical;
