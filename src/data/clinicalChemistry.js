const clinicalChemistry = {
  id: 1,
  title: 'Clinical Chemistry & Electrolyte Analyzers',
  products: [
    {
      id: 101,
      category: 'Clinical Chemistry',
      title: 'SNIBE Bioassay 240 Plus',
      image:
        'https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699596231/Keton/equip-1_xpdrzl.png',
      description: [
        '240 tests per hour',
        '90 sample positions',
        'Low water consumption',
        'Hifh efficiency wash station for cuvettes',
        'Reusable cuvettes',
        '24 Hour Refrigetation System',
        'Uses serum, plasma, urine, CSF',
      ],
      reviews: [
        {
          id: 1,
          name: 'Dr. John Doe',
          date: '12/12/2020',
          rating: 4,
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        },
        {
          id: 2,
          name: 'Dr. Jane Doe',
          date: '12/12/2020',
          rating: 4,
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        },
      ],
    },
    {
      id: 102,
      category: 'Clinical Chemistry',
      title: 'GENRUI GE 300',
      image:
        'https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699596231/Keton/equip-2_zikl7t.png',
      description: [
        'principle: ISE Ion Selective Electrode',
        '60 Samples per hour',
        '5-6 Inch colour screen',
        'Autosampling wash, calibration',
        'Real time display of volume reagent',
        'Easy to Maintain',
      ],
    },
  ],
};

export default clinicalChemistry;
