function Banner(){
    return (
              <div class="flex items-center justify-around py-8 gap-x-12">
        <div class="w-1/2">
          <h1 class="text-6xl font-bold">FIND MOVIE</h1>
          <h2 class="text-3xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent font-semibold">
            TV SHOWS AND MORE
          </h2>
          <p class="my-2 text-xl">Stream your favorite trending and top-rated movies now!</p>
          <button class="px-5 py-2 border-2 border-white rounded-xl bg-[#ff0000]">▷ Watch tutorial</button>
        </div>
        <div class="relative">
          <img src="/img2.jpeg" alt="" class="w-[250px] rounded-lg" />
          <img src="/img1.jpeg" alt="" class="w-[250px] rounded-lg absolute right-20 top-10" />
        </div>
      </div>
    )
}
export default Banner;