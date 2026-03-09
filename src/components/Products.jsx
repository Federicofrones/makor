import React, { useState, useEffect } from "react";
import Reloj from "../assets/H9Negro.jpeg";
import Reloj2 from "../assets/reloj1.jpg";
import Cargador from "../assets/cargador1.jpg";
import Cargador2 from "../assets/cargador2.jpg";
import Auriculares from "../assets/S90.jpeg";
import Auriculares2 from "../assets/S90N.jpeg";
import AuriCable from "../assets/AuriC.jpeg";
import CargadorC from "../assets/CargadorC.jpeg";
import CargadorC1 from "../assets/CargadorC1.jpeg";
import CargadorIphone from "../assets/CargadorIphonepro.jpg";
import CargadorIph from "../assets/CargadorIph.jpeg";
import D18 from "../assets/D18.jpeg";
import D18a from "../assets/d18A.jpeg";
import En1P from "../assets/3En1P.jpeg";
import { IoClose, IoBagHandleOutline, IoCreateOutline, IoTrashOutline, IoCheckmarkOutline, IoAddOutline } from "react-icons/io5";

const initialProducts = [
  {
    id: 1,
    titulo: "Reloj Inteligente H9 Promax Smart Watch",
    imagen: Reloj,
    imagenes: [Reloj2, Reloj],
    precio: 1380,
    categoria: "RELOJES",
    descripcion:
      "Reloj con múltiples funciones, H9 PRO MAX Smart Watch Serie 9 BT Llamadas Cargador inalámbrico Hombres Mujeres Sport Fitness",
  },
  {
    id: 2,
    titulo: "Auriculares Bluetooth X2 Pro",
    imagen: Auriculares,
    imagenes: [Auriculares2, Auriculares],
    precio: 790,
    categoria: "AURICULARES",
    descripcion:
      "Auriculares inalámbricos S90 TWS Premium con Bluetooth 5.3, sonido estéreo HiFi y micrófono dual con reducción de ruido. Ofrecen hasta 4 horas de música, carga rápida en 1 hora y 200 horas en espera. Disponibles en blanco, negro y rosa. Compactos, con control táctil y llamadas binaurales.",
  },
  {
    id: 3,
    titulo: "Cargador 3 en 1 Rápido 20W",
    imagen: Cargador,
    imagenes: [Cargador2, Cargador],
    precio: 230,
    categoria: "CARGADORES",
    descripcion:
      "Paquete de caja 120W Aleación de zinc Uno a tres, Cable DE DATOS Carga súper rápida Interfaz tres en uno Cable de carga de teléfono 1,2 m.",
  },
  {
    id: 4,
    titulo: "AuriCable",
    imagen: AuriCable,
    imagenes: [AuriCable],
    precio: 0,
    categoria: "CABLES",
    descripcion: "Auriculares cableados, puerto AUX, Color Blanco y Negro",
  },
  {
    id: 5,
    titulo: "Ficha + Cable Tipo C Carga Rapida",
    imagen: CargadorC,
    imagenes: [CargadorC1, CargadorC],
    precio: 0,
    categoria: "CARGADORES",
    descripcion:
      "Cargador de 27W y cable de datos de 6A, Cargador Super Flash 27W",
  },
  {
    id: 6,
    titulo: "Ficha + Cable para Iphone Lightning",
    imagen: CargadorIphone,
    imagenes: [CargadorIph, CargadorIphone],
    precio: 0,
    categoria: "CARGADORES",
    descripcion: "Cargador de 10.5W , Cargador Super Flash",
  },
  {
    id: 7,
    titulo: "Reloj Inteligente D18",
    imagen: D18a,
    imagenes: [D18, D18a],
    precio: 0,
    categoria: "RELOJES",
    descripcion:
      "Reloj inteligente impermeable podómetro rastreador de actividad reloj inteligente con presión arterial oxígeno en sangre",
  },
  {
    id: 8,
    titulo: "Cargador 3 en 1 Rápido Premium",
    imagen: En1P,
    imagenes: [En1P],
    precio: 0,
    categoria: "CARGADORES",
    descripcion:
      "Cable de datos de uno a tres de aleación de zinc de 120W Carga súper rápida interfaz tres en uno",
  },
];

const Products = ({ addToCart }) => {
  const [productos, setProductos] = useState(initialProducts);
  const [categories, setCategories] = useState(["RELOJES", "AURICULARES", "CARGADORES", "CABLES"]);
  const [activeCategory, setActiveCategory] = useState("VER TODO");

  const [isManagingCats, setIsManagingCats] = useState(false);
  const [editingCatIndex, setEditingCatIndex] = useState(null);
  const [editingCatValue, setEditingCatValue] = useState("");
  const [newCatValue, setNewCatValue] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleOpenProduct = (producto) => {
    setSelectedProduct(producto);
    setQuantity(1); // Reset quantity when opening a new product
    setCurrentImageIndex(0); // Reset picture index
    setIsZoomed(false);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    setSelectedProduct(null);
  };

  const handleSaveCategoryEdit = (index) => {
    if (!editingCatValue.trim()) return;
    const oldCat = categories[index];
    const newCat = editingCatValue.trim().toUpperCase();

    // Update categories
    const nextCats = [...categories];
    nextCats[index] = newCat;
    setCategories(nextCats);

    // Update products using the old category name
    setProductos(productos.map(p => p.categoria === oldCat ? { ...p, categoria: newCat } : p));

    if (activeCategory === oldCat) setActiveCategory(newCat);
    setEditingCatIndex(null);
  };

  const handleDeleteCategory = (index) => {
    const catToDelete = categories[index];
    setCategories(categories.filter((_, i) => i !== index));
    if (activeCategory === catToDelete) setActiveCategory("VER TODO");

    // Move orphaned products strictly to "OTROS" 
    setProductos(productos.map(p => p.categoria === catToDelete ? { ...p, categoria: "OTROS" } : p));
  };

  const handleAddCategory = () => {
    if (!newCatValue.trim()) return;
    setCategories([...categories, newCatValue.trim().toUpperCase()]);
    setNewCatValue("");
  };

  const displayedProducts = productos.filter(p => activeCategory === "VER TODO" || p.categoria === activeCategory);

  return (
    <section className="px-8 py-10 max-w-[1400px] mx-auto w-full">
      <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
        {/* Left Column - Offers */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-10 pb-4 border-b border-gray-100">
            <h2 className="text-4xl font-black text-gray-800 tracking-tight">CATÁLOGO</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {displayedProducts.length > 0 ? displayedProducts.map((producto) => (
              <div
                key={producto.id}
                onClick={() => handleOpenProduct(producto)}
                className="group cursor-pointer flex flex-col"
              >
                <div className="bg-[#f0f0f0] aspect-square flex items-center justify-center p-8 relative overflow-hidden transition-colors">
                  <img
                    src={producto.imagen}
                    alt={producto.titulo}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-6 left-6 flex items-stretch shadow-md">
                    <div className="bg-orange-500 text-white p-2.5 flex items-center justify-center">
                      <IoBagHandleOutline className="text-lg" />
                    </div>
                    <span className="font-extrabold text-gray-900 bg-white px-3 flex items-center text-sm">${producto.precio}</span>
                  </div>
                </div>
                <div className="mt-4 pr-4">
                  <h5 className="text-gray-800 text-[13px] leading-snug font-semibold line-clamp-2 uppercase group-hover:text-orange-500 transition-colors">
                    {producto.titulo}
                  </h5>
                  {isManagingCats && (
                    <div className="mt-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      Categoría actual: {producto.categoria || "Ninguna"}
                    </div>
                  )}
                </div>
              </div>
            )) : (
              <div className="col-span-1 md:col-span-2 text-center text-gray-400 py-20 font-bold tracking-widest uppercase">
                No hay productos en esta sección
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Categories Menu */}
        <div className="w-full md:w-64 pt-6 lg:pt-20">
          <nav className="flex flex-col gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest sticky top-32">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
              <span className="text-gray-900 font-extrabold text-sm">SECCIONES</span>
              <button
                onClick={() => setIsManagingCats(!isManagingCats)}
                className={`p-1.5 rounded transition-colors ${isManagingCats ? 'bg-orange-500 text-white' : 'text-orange-500 hover:bg-orange-50'}`}
                title="Gestionar Secciones"
              >
                <IoCreateOutline className="text-lg" />
              </button>
            </div>

            {!isManagingCats ? (
              <>
                <button
                  onClick={() => setActiveCategory("VER TODO")}
                  className={`text-left transition-colors pb-1 w-fit ${activeCategory === "VER TODO" ? "text-orange-500 border-b-2 border-orange-500" : "hover:text-gray-900"}`}
                >
                  VER TODO
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left transition-colors pb-1 w-fit ${activeCategory === cat ? "text-orange-500 border-b-2 border-orange-500" : "hover:text-gray-900"}`}
                  >
                    {cat}
                  </button>
                ))}
              </>
            ) : (
              <div className="flex flex-col gap-3">
                <p className="text-[10px] text-gray-400 lowercase normal-case italic mb-2">Edita o elimina secciones existentes. Los productos de secciones eliminadas se moverán a "Otros".</p>
                {categories.map((cat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {editingCatIndex === i ? (
                      <>
                        <input
                          type="text"
                          value={editingCatValue}
                          onChange={(e) => setEditingCatValue(e.target.value)}
                          className="flex-1 w-full border border-orange-500 bg-white px-2 py-1 text-gray-800 outline-none rounded-none"
                          autoFocus
                        />
                        <button onClick={() => handleSaveCategoryEdit(i)} className="text-green-500 hover:text-green-600 p-1 bg-green-50 rounded"><IoCheckmarkOutline className="text-lg" /></button>
                        <button onClick={() => setEditingCatIndex(null)} className="text-gray-400 hover:text-red-500 p-1 bg-red-50 rounded"><IoClose className="text-lg" /></button>
                      </>
                    ) : (
                      <>
                        <span className="flex-1 text-gray-800 truncate" title={cat}>{cat}</span>
                        <button onClick={() => { setEditingCatIndex(i); setEditingCatValue(cat); }} className="text-gray-400 hover:text-orange-500"><IoCreateOutline className="text-lg" /></button>
                        <button onClick={() => handleDeleteCategory(i)} className="text-gray-400 hover:text-red-500"><IoTrashOutline className="text-lg" /></button>
                      </>
                    )}
                  </div>
                ))}

                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200 border-dashed">
                  <input
                    type="text"
                    value={newCatValue}
                    onChange={(e) => setNewCatValue(e.target.value)}
                    placeholder="NUEVA SECCIÓN"
                    className="flex-1 w-full border border-gray-200 bg-gray-50 px-2 py-1.5 text-gray-800 outline-none focus:border-orange-500 rounded-none"
                    onKeyDown={(e) => e.key === 'Enter' && handleAddCategory()}
                  />
                  <button onClick={handleAddCategory} className="text-white hover:bg-orange-600 font-bold bg-orange-500 p-1.5 rounded"><IoAddOutline className="text-lg" /></button>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* Modal Detail Product */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 transition-opacity">
          <div className="bg-white w-full max-w-lg p-8 relative shadow-2xl text-gray-800 flex flex-col items-center max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-orange-500 text-2xl transition-colors bg-white/50 rounded-full p-1"
            >
              <IoClose />
            </button>

            {/* Image Slider */}
            <div className="w-full mb-6">
              <div
                className={`bg-[#f2f2f2] w-full p-4 flex items-center justify-center shrink-0 cursor-zoom-in transition-all duration-300 relative overflow-hidden ${isZoomed ? "h-96" : "h-64"}`}
                onClick={() => setIsZoomed(!isZoomed)}
                title="Haz clic para acercar/alejar"
              >
                <img
                  src={selectedProduct.imagenes[currentImageIndex]}
                  alt={selectedProduct.titulo}
                  className={`object-contain mix-blend-multiply transition-transform duration-500 ${isZoomed ? "scale-150 w-full h-full cursor-zoom-out" : "w-full h-full"}`}
                />
              </div>

              {/* Thumbnails */}
              {selectedProduct.imagenes && selectedProduct.imagenes.length > 1 && (
                <div className="flex items-center justify-center gap-3 mt-4">
                  {selectedProduct.imagenes.map((imgUrl, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); setIsZoomed(false); }}
                      className={`w-14 h-14 bg-[#f2f2f2] p-1 border-2 transition-colors ${currentImageIndex === i ? 'border-orange-500' : 'border-transparent hover:border-gray-300'}`}
                    >
                      <img src={imgUrl} alt="" className="w-full h-full object-cover mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2 text-center uppercase tracking-wide">{selectedProduct.titulo}</h3>
            <p className="text-sm text-gray-500 text-center leading-relaxed mb-6">{selectedProduct.descripcion}</p>

            <div className="w-full flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
              <div className="flex flex-col gap-1 text-left">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Precio Unitario</span>
                <span className="text-2xl font-black text-gray-900">${selectedProduct.precio}</span>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center border border-gray-300 rounded overflow-hidden h-12">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 hover:bg-gray-100 text-gray-600 font-bold transition-colors">-</button>
                  <input type="number" readOnly className="w-12 text-center text-gray-900 font-bold outline-none" value={quantity} />
                  <button onClick={() => setQuantity(q => q + 1)} className="px-4 hover:bg-gray-100 text-gray-600 font-bold transition-colors">+</button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 font-bold uppercase tracking-wider text-sm transition-colors h-12 inline-flex items-center gap-2"
                >
                  <IoBagHandleOutline className="text-lg" />
                  AGREGAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
