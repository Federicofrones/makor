import React from "react";
import logoMakor from "/makorhorizontalblanco.svg";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

const NavBar = ({ cartCount, onOpenCart }) => {
  return (
    <nav className="bg-white h-[90px] flex items-center justify-between px-8 sticky top-0 z-10 w-full border-b border-gray-100">
      <div className="flex items-center">
        <img src={logoMakor} alt="Logo Makor" className="h-[22px] object-contain invert-[.4] sepia-[1] saturate-[50] hue-rotate-[10deg] brightness-[0.8]" style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(87%) saturate(3025%) hue-rotate(346deg) brightness(101%) contrast(106%)' }} />
      </div>

      <div className="flex items-center space-x-8 text-gray-500 ml-auto">
        <button className="hover:text-orange-500 flex flex-col items-center gap-1 transition-colors">
          <IoSearchOutline className="text-[22px]" />
          <span className="text-[10px] uppercase font-bold hidden xl:block">Buscar</span>
        </button>
        <button onClick={onOpenCart} className="hover:text-orange-500 flex flex-col items-center gap-1 relative transition-colors">
          <IoCartOutline className="text-[22px]" />
          <span className="text-[10px] uppercase font-bold hidden xl:block">Cesta</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-[16px] h-[16px] bg-orange-500 text-white flex items-center justify-center text-[9px] font-bold rounded-full border border-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
