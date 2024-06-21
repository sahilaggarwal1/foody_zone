import React from "react";

export default function MainComponent() {
  return (
    <div className="overflow-hidden">
      <img
        className="w-full absolute -z-50"
        src="Images/main-image.png"
        alt="main"
      />
      <div className="bg-gray-700 bg-opacity-50 py-4">
        <div className="flex justify-center">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-10">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index} className="border border-white rounded-md">
                <div>
                  <img
                    className="float-left py-6"
                    src="Images/card-1.png"
                    alt="card1"
                  />
                  <div className="text-white py-6">Boiled Eggs</div>
                  <div className="text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque natus et laudantium maiores quos hic adipisci quis,
                    repellat accusamus alias qui distinctio eveniet dicta
                  </div>
                  <div className="bg-orange-600 text-white w-14 my-4 mx-auto px-1 py-1 gap-2 rounded-md">
                    $10.00
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
