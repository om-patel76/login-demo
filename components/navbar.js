import React from "react";

function Navbar() {
    return (
        <div className="bg-black text-[#787A91]">
        <nav className="relative flex flex-wrap flex-row px-8 pt-10">
        <div className="logo">
          <a href="#logo">Wallet App logo </a>
        </div>

        <ul className="flex ml-auto gap-x-5 flex-row">
          <li>Discover</li>
          <li>How it works</li>
          <li>Reviews</li>
          <li>Blog</li>
        </ul>
      </nav>
      </div>
    )
}

export default Navbar;