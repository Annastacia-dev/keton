import { Link } from 'react-router-dom';

const imagesArrayOne = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595845/Keton/Lab_Tecs48_irzmvb.jpg',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699594995/Keton/Keton_Consulting25_1_aeiu4t.jpg',
  },

  {
    id: 3,
    src: 'https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595144/Keton/Keton_Consulting38_1_o1nnjk.jpg',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699594841/Keton/Keton_Consulting9_ugnynd.jpg',
  },
];

const imagesArrayTwo = [
  {
    id: 5,
    /*LInk not changed incase you update please delete*/
    src: 'https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699594956/Keton/Keton_Consulting2_fts9hx.jpg',
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595632/Keton/Keton_Consulting62_tc33e1.jpg',
  },
  {
    id: 7,
    src: 'https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699594995/Keton/Keton_Consulting25_1_aeiu4t.jpg',
  },
];

const imagesArrayThree = [
  {
    id: 8,
    src: 'https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595597/Keton/Lab_Tecs1_pbmoki.jpg',
  },
  {
    id: 9,
    src: 'https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595830/Keton/Lab_Tecs38_wmznpk.jpg',
  },
  {
    id: 10,
    src: 'https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595917/Keton/Lab_Tecs53_j5dxwn.jpg',
  },
  {
    id: 11,
    src: 'https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595750/Keton/Lab_Tecs29_psy0kk.jpg',
  },
];

const GallerySection = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-primaryBg py-6">
      <div className="text-center sm:mt-10">
        <h2 className="capitalize sm:text-3xl font-bold mt-2">Gallery</h2>
        <hr className="w-20 mx-auto border-2 border-primaryGreen rounded my-1" />
      </div>

      <div className="mt-10 flex flex-col gap-2 sm:px-3 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {imagesArrayOne.map((image) => {
            const { id, src } = image;
            return (
              <div key={id} className="col-span-1">
                <img
                  src={src}
                  alt="gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {imagesArrayTwo.map((image) => {
            const { id, src } = image;
            return (
              <div key={id} className="col-span-1">
                <img
                  src={src}
                  alt="gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {imagesArrayThree.map((image) => {
            const { id, src } = image;
            return (
              <div key={id} className="col-span-1">
                <img
                  src={src}
                  alt="gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      <Link to="/gallery">
        <button className="bg-primaryGreen text-white px-4 py-2 mt-10 rounded">
          View More
        </button>
      </Link>
    </div>
  );
};

export default GallerySection;
