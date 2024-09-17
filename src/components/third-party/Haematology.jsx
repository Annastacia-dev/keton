import Header from './Header';

const tableData = [
  {
    Code: 'DCR011030',
    Name: 'MultiContr Normal',
    Unit: '6x5 ml',
  },
  {
    Code: 'DCR011100',
    Name: 'MultiContr Normal',
    Unit: '20x5 ml',
  },
  {
    Code: 'DCR012030',
    Name: 'MultiContr Pathol',
    Unit: '6x5 ml',
  },
  {
    Code: 'DCR012100',
    Name: 'MultiContr Pathol',
    Unit: '20x5 ml',
  },
  {
    Code: 'DCR031003',
    Name: 'Protein Contr Level 1',
    Unit: '3x1 ml',
  },
  {
    Code: 'DCR032003',
    Name: 'Protein Contr Level 2',
    Unit: '3x1 ml',
  },
  {
    Code: 'DCR040009',
    Name: 'Lipid Contr',
    Unit: '3x3 ml',
  },
  {
    Code: 'DCR051003',
    Name: 'U/CSF Albumin Level 1',
    Unit: '3x1 ml',
  },
  {
    Code: 'DCR052003',
    Name: 'U/CSF Albumin Level 2',
    Unit: '3x1 ml',
  },
  {
    Code: 'DCR131030',
    Name: 'Urine Contr Level 1',
    Unit: '6x5 ml',
  },
  {
    Code: 'DCR132030',
    Name: 'Urine Contr Level 2',
    Unit: '6x5 ml',
  },
  {
    Code: 'DCR081001',
    Name: 'D-Dimer Contr Level 1',
    Unit: '2x0.5 ml; 1x2.5 ml',
  },
  {
    Code: 'DCR082001',
    Name: 'D-Dimer Contr Level 2',
    Unit: '2x0.5 ml; 1x2.5 ml',
  },
  {
    Code: 'DCR101001',
    Name: 'HbA1c liquid Contr Level 1',
    Unit: '4x0.25 ml',
  },
  {
    Code: 'DCR102001',
    Name: 'HbA1c liquid Contr Level 2',
    Unit: '4x0.25 ml',
  },
];

const Haematology = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center gap-4 sm:p-6 p-2 bg-primaryBg">
        <>
          <div className="flex flex-col justify-center rounded-full h-10 sm:w-full w-3/4">
            <h1 className="text-2xl text-black  capitalize p-4 ml-2">
              Haematology Controls
            </h1>
          </div>
          <div className="flex flex-col justify-center  bg-primaryBlue rounded-full h-10 sm:w-full w-3/4">
            <h1 className="text-md font-bold text-black capitalize p-4 ml-2">
              Biotechne R&D controls
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <ul className="flex flex-col gap-2 text-sm mt-4 w-1/2 leading-6 px-4">
              <li>Multilevel Whole Blood Controls</li>
              <li>Whole Blood Calibrators</li>
              <li>Wholde Blood Reticulocyte Controls</li>
              <li>Flow Cytometry Controls with Human stem cells CD34+</li>
              <li>LeukoReduced Controls</li>
              <li>Body Fluid Controls</li>
              <li>Linearity Material</li>
              <li>Urine Cytology Control</li>
              <li>Erythroblast Controls</li>
              <li>Others controls</li>
              <li>EQA products</li>
            </ul>
            <div className="col sm:col-span-1 flex flex-col">
              <div className="relative sm:bg-primaryBlue">
                <div className="absolute left-20 bg-primaryBlue w-[55%] sm:h-[19rem] rounded-xl sm:block hidden"></div>
                <div className="sm:absolute">
                  <img
                    src="https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699596286/Keton/Rectangle_227_hsmhjx.png"
                    alt="logo"
                    className="sm:w-3/4 w-3/4 sm:h-3/4 rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
        <>
          <div className="flex flex-col justify-center  bg-primaryBlue rounded-full h-10 mt-6 sm:w-full w-3/4">
            <h1 className="text-md font-bold text-black capitalize p-4 ml-2">
              Diagon controls
            </h1>
          </div>
          <div className="">
            <table className="table-auto text-sm mt-4 leading-6 sm:w-full w-5/12">
              <thead className="border-collapse border bg-secondaryBlue text-white">
                <th className="sm:px-4 px-2 py-2 text-left">Code</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Unit</th>
              </thead>
              <tbody className="border-collapse border">
                {tableData.map((data) => (
                  <tr key={data.Code}>
                    <td className="border px-4 py-2">{data.Code}</td>
                    <td className="border px-4 py-2">{data.Name}</td>
                    <td className="border px-4 py-2">{data.Unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </div>
    </>
  );
};

export default Haematology;
