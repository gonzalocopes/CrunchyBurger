// src/config/clientConfig.js
export const clientConfig = {
  nombre: "Tu Marca",          // Nombre del local
  tipo: "hamburgueseria",                     // pizzeria | hamburgueseria | heladeria | etc.

  whatsapp: "+5491136424020",           // Teléfono del negocio (formato internacional)

  logo: "/images/tu-marca-logo.png",    // Ruta dentro de /public (ej: public/images/logo-pizzeria.png)

  colores: {
    primario: "#FFC107",   // Dorado Crunchy
    secundario: "#111827", // gris muy oscuro
    textoClaro: "#333333", // Texto oscuro para contrastar con el amarillo si se usa de fondo
  },

  hero: {
    fondo: "/images/burger-slider-1.png",   // Default fallback
    slides: [
      {
        titulo: "TU MARCA",
        subtitulo: "Calidad premium en cada bocado.",
        image: "/images/burger-slider-1.png",
      },
      {
        titulo: "Sabor Inigualable",
        subtitulo: "Ingredientes frescos y seleccionados.",
        image: "/images/burger-slider-2.png",
      },
      {
        titulo: "Momentos Únicos",
        subtitulo: "Compartí lo mejor con tus amigos.",
        image: "/images/burger-slider-3.png",
      },
    ],
  },
  // 🔔 NUEVO: configuración de horario
  //horario: {
  //enabled: true, // si lo ponés en false, se desactiva el modo cerrado
  // apertura: "14:00", // hora de apertura (24 hs)
  //cierre: "23:30",   // hora de cierre  (24 hs)
  //mensajeCerrado:
  //"Ahora estamos cerrados. Nuestro horario: de 19:00 a 23:30 hs.",
  //},
};
