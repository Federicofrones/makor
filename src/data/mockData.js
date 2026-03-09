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

export const initialProducts = [
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
