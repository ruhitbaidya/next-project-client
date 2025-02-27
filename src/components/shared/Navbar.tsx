import React from "react";
import { Search, Heart, ShoppingCart } from "lucide-react";
import Logo from "@/app/assets/svgs/Logo";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-100 p-4 shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-xl font-semibold text-gray-800 ml-2">
          <Logo />
        </span>
      </div>
      <div className="flex flex-grow justify-center mx-4">
        <div className="relative w-full max-w-xl">
          {" "}
          {/* Increased max width */}
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full h-12" // Increased height
          />
          <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <button className="mx-2 text-gray-700 flex items-center">
          <Heart className="h-6 w-6" />
        </button>
        <button className="mx-2 text-gray-700 flex items-center">
          <ShoppingCart className="h-6 w-6" />
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400">
          Action
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
