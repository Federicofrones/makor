import React, { useState } from 'react';
import { IoClose, IoTrashOutline } from 'react-icons/io5';

const CartModal = ({ cartItems, onClose, onRemove, onUpdateQuantity, onClearCart }) => {
    const [customerName, setCustomerName] = useState('');
    const [customerNotes, setCustomerNotes] = useState('');

    // Makor typical phone number or placeholder. Must include country code.
    const WHATSAPP_NUMBER = "5491112345678";

    const total = cartItems.reduce((acc, item) => acc + (item.precio * item.quantity), 0);

    const handleSendWhatsApp = () => {
        if (cartItems.length === 0) return;
        if (!customerName.trim()) {
            alert("Por favor, ingresa tu nombre para continuar.");
            return;
        }

        let message = `*NUEVO PEDIDO - MAKOR IMPORTACIONES*\n`;
        message += `*Cliente:* ${customerName}\n\n`;
        message += `*Detalle:*\n`;

        cartItems.forEach(item => {
            const subtotal = item.precio * item.quantity;
            message += `- ${item.quantity} x ${item.titulo} ($${item.precio} c/u) - *$${subtotal}*\n`;
        });

        message += `\n*TOTAL: $${total}*\n`;

        if (customerNotes.trim()) {
            message += `\n*Notas:* ${customerNotes}\n`;
        }

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        // Opcional: limpiar carrito después de enviar
        onClearCart();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-end z-50 transition-opacity">
            <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col pt-8 pb-4">
                {/* Header */}
                <div className="px-6 flex items-center justify-between border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-black text-gray-800 tracking-tight">TU CESTA</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-orange-500 text-2xl transition-colors">
                        <IoClose />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-6">
                    {cartItems.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-2 h-full">
                            <span className="text-4xl text-gray-200">🛒</span>
                            <p className="text-sm font-bold uppercase tracking-widest text-gray-300">Cesta vacía</p>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-20 h-20 bg-[#f0f0f0] flex-shrink-0 flex items-center justify-center p-2 rounded">
                                    <img src={item.imagen} alt={item.titulo} className="w-full h-full object-contain mix-blend-multiply" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between gap-4">
                                        <h5 className="text-gray-800 text-xs font-bold leading-snug line-clamp-2 uppercase">
                                            {item.titulo}
                                        </h5>
                                        <button
                                            onClick={() => onRemove(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                                        >
                                            <IoTrashOutline />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center border border-gray-200 rounded h-8 overflow-hidden">
                                            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-3 hover:bg-gray-100 text-gray-600 font-bold transition-colors">-</button>
                                            <input type="number" readOnly className="w-10 text-center text-xs text-gray-900 font-bold outline-none" value={item.quantity} />
                                            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-3 hover:bg-gray-100 text-gray-600 font-bold transition-colors">+</button>
                                        </div>
                                        <span className="font-black text-gray-900">${item.precio * item.quantity}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer actions */}
                {cartItems.length > 0 && (
                    <div className="px-6 border-t border-gray-100 pt-6 mt-auto">
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Tu Nombre o Empresa *</label>
                                <input
                                    type="text"
                                    value={customerName}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                    className="w-full border border-gray-200 rounded h-10 px-3 text-sm focus:outline-none focus:border-orange-500 text-gray-800 bg-gray-50"
                                    placeholder="Ej: Juan Pérez / Tech Store"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Notas al vendedor (opcional)</label>
                                <textarea
                                    value={customerNotes}
                                    onChange={(e) => setCustomerNotes(e.target.value)}
                                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange-500 text-gray-800 resize-none bg-gray-50 min-h-[60px]"
                                    placeholder="Ej: Necesito los auriculares en color negro si es posible."
                                />
                            </div>

                            <div className="flex justify-between items-end border-b border-gray-100 border-dashed pb-4 mt-2">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total a pagar</span>
                                <span className="text-3xl font-black text-gray-900">${total}</span>
                            </div>

                            <button
                                onClick={handleSendWhatsApp}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wider text-sm transition-colors py-4 mt-2"
                            >
                                Enviar pedido por WhatsApp
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartModal;
