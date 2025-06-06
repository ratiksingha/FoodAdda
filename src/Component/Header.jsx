import React from "react";
import { Link } from "react-router-dom";

import SVGComponent from "../utils/SVGComponent";
import { useSelector } from "react-redux";  

import useOnlineStatus from "../utils/useOnlineStatus";

import { useSelector } from "react-redux";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About🧑‍💻", path: "/about" },
  { label: "🛒 ", path: "/cart" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const cart = useSelector((store) => store.cart.items);
  const cartItemsCount = cart.length;

  const isOnline = useOnlineStatus();
  const OnlineStatus = isOnline ? "✅" : "🔴";

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b-2 border-black/20 text-black">
      <nav className="flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <SVGComponent width={50} height={50} />
        </div>

        {/* Navigation */}
        <ul className="flex flex-row flex-wrap gap-4 items-center m-0 p-0 list-none">
          {navLinks.map(({ label, path }) => (
            <li key={label} className="w-auto">
              <Link
                to={path}
                className="block px-5 py-2 rounded-full text-base font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition relative"
              >
                {label}
                {label === "🛒 " && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-orange-500 text-white shadow">
                {cartItemsCount}
              </span>
            )}
              </Link>
            </li>
          ))}
          <li className="w-auto text-xl">{OnlineStatus}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
