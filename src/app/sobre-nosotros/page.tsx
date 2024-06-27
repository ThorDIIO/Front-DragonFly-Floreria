export default function AboutUs() {
  return (
    <section className="overflow-hidden bg-gray-50 md:pt-0  min-h-screen max-sm:pt-5">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold leading-tight text-black sm:text-3xl lg:text-4xl ">
              🌻 Somos DragonFly
            </h2>
            <p className="max-w-lg mt-3 text-lg leading-relaxed text-gray-600 md:mt-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className="mt-4 text-xl text-gray-600 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                <span className="relative text-base"> Siguenos en </span>
              </span>
              <a
                href="#"
                title=""
                className="transition-all duration-200 text-base text-sky-500 hover:text-sky-600 hover:underline"
              >
                {" "}
                Instagram!
              </a>
            </p>
          </div>

          <div className="relative">
            <img
              className="absolute w-[70%] inset-x-0 bottom-0 -mb-34 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />

            <img
              className="relative pt-2 w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://cdn.pixabay.com/photo/2018/04/20/14/45/gardener-3336148_640.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
