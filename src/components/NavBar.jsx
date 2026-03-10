import React from "react";
import logoMakor from "/makor-horizontal-azul.svg";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

const NavBar = ({ cartCount, onOpenCart }) => {
  return (
    <nav className="bg-white h-[90px] flex items-center justify-between px-4 md:px-8 sticky top-0 z-10 w-full border-b border-gray-100">
      <div className="flex items-center shrink-0">
        <img src={logoMakor} alt="Logo Makor" className="w-[120px] md:w-[200px] h-auto object-contain shrink-0" />
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
