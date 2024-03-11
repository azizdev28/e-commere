import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="container flex justify-between items-center p-6  shadow-md top-0 z-50 w-full">
      <div>
        <Link href="/" className="text-blue-700 text-4xl font-black">
          {" "}
          Shopping
        </Link>
      </div>
      <ul className="flex justify-between items-center gap-12">
        <li>
          <Link className=" text-blue-700 hover:text-teal-500" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className=" text-blue-700 hover:text-teal-500" href={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className=" text-blue-700 hover:text-teal-500" href={"/users"}>
            Users
          </Link>
        </li>
        <li>
          <Link
            className=" text-blue-700 hover:text-teal-500"
            href={"/products"}
          >
            Products
          </Link>
        </li>
        <div className="flex  gap-12">
          <button> Sign Up </button>
          <button>Sign In</button>
        </div>
      </ul>
    </div>
  );
};

export default Header;
