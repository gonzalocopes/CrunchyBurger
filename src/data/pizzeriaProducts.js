// HAMBURGUESAS
export const hamburguesas = [
  {
    id: "burg-simple",
    name: "Hamburguesa Clásica",
    category: "Hamburguesas",
    description: "Medallón de carne, queso, lechuga, tomate y aderezo de la casa.",
    price: 6500,
    img: "/images/burgas/clasica.jpg",
  },
  {
    id: "burg-doble-queso",
    name: "Doble Queso",
    category: "Hamburguesas",
    description: "Doble medallón, doble queso cheddar, pepinos y salsa especial.",
    price: 8200,
    img: "/images/burgas/doblequeso.jpg",
  },
  {
    id: "burg-bacon",
    name: "Bacon Burger",
    category: "Hamburguesas",
    description: "Medallón de carne, queso cheddar, panceta crocante y barbacoa.",
    price: 8800,
    img: "/images/burgas/bacon.jpg",
  },
  {
    id: "burg-completa",
    name: "Hamburguesa Completa",
    category: "Hamburguesas",
    description: "Carne, queso, jamón, huevo, lechuga, tomate y aderezo.",
    price: 9200,
    img: "/images/burgas/completa.jpg",
  },
 
];

// PAPAS Y ACOMPAÑAMIENTOS
export const papas = [
  {
    id: "papas-clasicas",
    name: "Papas Clásicas",
    category: "Papas",
    description: "Papas fritas tradicionales.",
    price: 3800,
    img: "/images/papas/papasfritas.png",
  },
  {
    id: "papas-cheddar-bacon",
    name: "Papas con Cheddar y Bacon",
    category: "Papas",
    description: "Papas fritas con salsa cheddar y panceta.",
    price: 5200,
    img: "/images/papas/papacompleta.png",
  },
  
  {
    id: "aros-cebolla",
    name: "Aros de Cebolla",
    category: "Acompañamientos",
    description: "Aros de cebolla rebozados y fritos.",
    price: 4500,
    img: "/images/papas/rabas.png",
  },
];

// BEBIDAS
export const bebidas = [
  {
    id: "gaseosa-lata",
    name: "Gaseosa en lata",
    category: "Bebidas",
    description: "Lata 354 ml, varias opciones.",
    price: 2500,
    img: "/images/bebidas/cocalata.png",
  },
  {
    id: "gaseosa-1-5",
    name: "Gaseosa 1.5L",
    category: "Bebidas",
    description: "Botella 1.5 litros para compartir.",
    price: 4200,
    img: "/images/bebidas/cocacola.png",
  },
  {
    id: "agua",
    name: "Agua",
    category: "Bebidas",
    description: "Agua mineral con o sin gas.",
    price: 2000,
    img: "/images/bebidas/agua.png",
  },
  {
    id: "cerveza-lata",
    name: "Cerveza en lata",
    category: "Bebidas",
    description: "Lata 473 ml.",
    price: 3500,
    img: "/images/bebidas/cerveza.png",
  },
];

// POSTRES
export const postres = [
  {
    id: "helado-1-4",
    name: "Helado 1/4 kg",
    category: "Postres",
    description: "Sabores a elección.",
    price: 4200,
    img: "/images/postres/helado.png",
  },
  {
    id: "brownie-helado",
    name: "CHOCOTORTA",
    category: "Postres",
    description: "Postre de chocolinas con crema y dulce de leche.",
    price: 4600,
    img: "/images/postres/chocotorta.png",
  },
  {
    id: "flan",
    name: "Flan casero",
    category: "Postres",
    description: "Con dulce de leche o crema.",
    price: 3200,
    img: "/images/postres/flan.png",
  },
];

// Agregados
// Extras para hamburguesas (los usamos en el upsell)
export const extrasPizza = [
  {
    id: "extra-carne",
    name: "Extra carne",
    price: 3500,
    category: "Extras",
  },
  {
    id: "extra-salchicha-papas",
    name: "Extra salchicha en papas",
    price: 3500,
    category: "Extras",
  },
  {
    id: "extra-provolone",
    name: "Extra queso provolone",
    price: 2000,
    category: "Extras",
  },
  {
    id: "extra-huevo-papas",
    name: "Extra huevo en papas",
    price: 1000,
    category: "Extras",
  },
  {
    id: "extra-huevo-hamburguesa",
    name: "Extra huevo en hamburguesa",
    price: 1000,
    category: "Extras",
  },
  {
    id: "extra-cebolla-asada",
    name: "Extra cebolla asada",
    price: 1000,
    category: "Extras",
  },
  {
    id: "extra-cebolla-morada",
    name: "Extra cebolla morada",
    price: 1000,
    category: "Extras",
  },
  {
    id: "extra-cebolla-blanca",
    name: "Extra cebolla blanca",
    price: 1000,
    category: "Extras",
  },
  {
    id: "extra-tomate",
    name: "Extra tomate",
    price: 1000,
    category: "Extras",
  },
  {
    id: "extra-rucula",
    name: "Extra rúcula",
    price: 1000,
    category: "Extras",
  },
  {
    id: "extra-pepino",
    name: "Extra pepino",
    price: 1000,
    category: "Extras",
  },
  {
    id: "extra-lechuga",
    name: "Extra lechuga",
    price: 1000,
    category: "Extras",
  },
  {
    id: "extra-verdeo-papas",
    name: "Extra verdeo en papas",
    price: 1000,
    category: "Extras",
  },
  {
    id: "extra-cheddar-hamburguesa",
    name: "Extra cheddar en hamburguesa",
    price: 2000,
    category: "Extras",
  },
  {
    id: "extra-cheddar-papas",
    name: "Extra cheddar en papas",
    price: 2000,
    category: "Extras",
  },
  {
    id: "extra-bacon-hamburguesa",
    name: "Extra bacon en hamburguesa",
    price: 2000,
    category: "Extras",
  },
  {
    id: "extra-bacon-papas",
    name: "Extra bacon en papas",
    price: 2000,
    category: "Extras",
  },
  {
    id: "extra-papas",
    name: "Extra papas",
    price: 3500,
    category: "Extras",
  },
];
