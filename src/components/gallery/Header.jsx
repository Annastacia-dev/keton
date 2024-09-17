const Header = () => {
  return (
    <header
      className="bg-cover bg-center h-[35rem] flex flex-col justify-center items-center text-white bg-no-repeat"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dqfoxx9mz/image/upload/v1699595646/Keton/Keton_Consulting61_gvtbay.jpg)`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-[35rem] bg-black opacity-50"></div>
      <div className="relative z-8 text-center md:mt-12 mt-20">
        <h1 className="md:text-4xl text-2xl font-bold text-center uppercase mt-8">
          Gallery
        </h1>
      </div>
    </header>
  );
};

export default Header;
