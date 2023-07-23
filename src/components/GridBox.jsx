/* eslint-disable react/prop-types */
function GridBox({ gameCards }) {
  return (
    <>
      {/* background colour */}
      <div>
        {/* setting the margin and padding --- mx = margin left & right my = margin top & bottom etc */}
        <div className="p-4 sm:mx-32">
          {/* the white dashed border */}

          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            {/* H1 html element for title */}
            <h1 className="text-4xl font-bold mb-5 bg-gradient-to-r from-blue-800 to-indigo-900 text-transparent bg-clip-text">
              Tailwind CSS Gridbox
            </h1>

            {/* setting up the grid -- according to screen size i control the number of columns */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
              {/* .map() */}
              {gameCards?.results?.map((card) => {
                return (
                  <div
                    key={card.id}
                    className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3 shadow-xl"
                  >
                    {/* Link Starts Here */}
                    <img
                      src={card?.background_image}
                      key={card.id}
                      loading="lazy"
                      alt="game-background-image"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                    ></img>
                    <span className="bg-indigo-700 text-white text-sm font-semibold tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                      {card?.name}
                    </span>
                  </div>
                );
              })}
              {/* End of .map() */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridBox;
