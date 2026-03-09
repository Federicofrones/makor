import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-500 py-8">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="text-sm font-bold tracking-wide text-gray-700">
            Makor Importaciones
          </h3>
          <span className="hidden md:inline text-gray-300">|</span>
          <p className="text-xs uppercase tracking-widest text-gray-400 mt-2 md:mt-0">
            Ventas al por Mayor
          </p>
        </div>
        <div className="mt-6 md:mt-0 flex space-x-8 text-xs font-semibold tracking-wider">
          <a href="#" className="hover:text-orange-500 transition-colors uppercase">Contacto</a>
          <a href="#" className="hover:text-orange-500 transition-colors uppercase">Terms</a>
          <a href="#" className="hover:text-orange-500 transition-colors uppercase">Privacy</a>
        </div>
      </div>
    </footer>
  );
};