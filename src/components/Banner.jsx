function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around py-8 gap-6 md:gap-x-12 text-center md:text-left">
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">FIND MOVIE</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-[#2203FF] to-[#C40D60] bg-clip-text text-transparent font-semibold">
          TV SHOWS AND MORE
        </h2>
        <p className="my-2 text-base sm:text-lg md:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas assumenda nemo autem illum sequi dolorum deleniti natus nesciunt accusantium hic? Ratione delectus, quos molestias dignissimos pariatur hic veniam obcaecati repudiandae?
        
        </p>
        <button className="px-5 py-2 border-2 border-white rounded-xl mt-4">
          ▷ Watch tutorial
        </button>
      </div>
      <div className="relative flex hidden md:block">
        <img src="/img1.jpeg" alt="" className="w-[180px] sm:w-[200px] md:w-[250px] rounded-lg" />
        <img
          src="/img2.jpeg"
          alt=""
          className="w-[180px] sm:w-[200px] md:w-[250px] rounded-lg md:absolute md:right-20 md:top-10"
        />
      </div>
    </div>
  );
}
export default Banner;
