import React from "react";

export default function Nav() {
  return (
    <div>
      <div>
        <nav className="bg-gray-700 h-60">
          <ul className="flex justify-between pt-20 px-32 mb-12">
            <li>
              <img src="Images/logo.png" alt="logo"></img>
            </li>
            <li>
              <input
                className="bg-gray-700 border-solid border-orange-600 border placeholder-white rounded-md pl-4 h-10"
                type="search"
                placeholder="Search Food...."
              ></input>
            </li>
          </ul>

          <ul className="flex gap-4 justify-center">
            <li>
              <div className="bg-orange-600 text-white gap-3 rounded-md px-3 py-2">
                All
              </div>
            </li>
            <li>
              <div className="bg-orange-600 text-white gap-3 rounded-md px-3 py-2">
                Breakfast
              </div>
            </li>
            <li>
              <div className="bg-orange-600 text-white gap-3 rounded-md px-3 py-2">
                Lunch
              </div>
            </li>
            <li>
              <div className="bg-orange-600 text-white gap-3 rounded-md px-3 py-2">
                Dinner
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
