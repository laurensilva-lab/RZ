/**
 * ============================================================
 * CONTENIDO EDITABLE DEL SITIO
 * ------------------------------------------------------------
 * Este es el único archivo que necesitás tocar para actualizar
 * textos, precios, horarios y links. Los componentes solo leen
 * estos datos, así que podés editar acá sin tocar el diseño.
 * ============================================================
 */

export const barbershop = {
  name: "RZ Barbería",
  tagline: "Oficio de barbero, corte a corte.",
  whatsappNumber: "59896237970", 
  instagram: "@raizonbautista",
  address: "Dirección de la barbería, Maldonado",
  mapsUrl: "https://maps.app.goo.gl/Q1bWaim3D41FSoXH6",
};

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Horarios", href: "#horarios" },
  { label: "Contacto", href: "#contacto" },
];

export const services = [
  {
    name: "Corte",
    description: "Corte Hombre .",
    price: 250,
    
  },
  {
    name: "Corte ",
    description: "Corte Niño.",
    price: 200,
    
  },
  {
    name: "Barba + Corte",
    description: "Barba perfilada y corte completo.",
    price: 300,
    
  },
  {
    name: " barba",
    description: "Solo barba.",
    price: 100,
    
  },
 
];

import diploma1 from "../assets/img/diploma1.png";
import diploma2 from "../assets/img/dipolma2.png"; // Usando la "o" antes de la "l"
import diploma3 from "../assets/img/diploma3.png";
import corte1 from "../assets/img/corte1.png";
import corte2 from "../assets/img/corte2.jpg"; 
import fondoWeb from "../assets/img/fondo web.jpg";


export const gallery = [
  { label: "Diploma 1", image: diploma1 },
  { label: "Diploma 2", image: diploma2 },
  { label: "Diploma 3", image: diploma3 },
  { label: "Corte 1", image: corte1 },
  { label: "Corte 2", image: corte2 },
  { label: "Fondo", image: fondoWeb },
];

export const hours = [
  { day: "Lunes a Viernes", time: "08:00 – 15:00" },
  { day: " Sábados - Domingos", time: "Cerrado" },
];
