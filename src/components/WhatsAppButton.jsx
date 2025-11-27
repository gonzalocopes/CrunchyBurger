// src/components/WhatsAppButton.jsx
import { clientConfig } from "../config/clientConfig";

export default function WhatsAppButton({ cart, total, customer, isClosed }) {
  const buildMessage = () => {
    const lines = [];

    lines.push("📦 Nuevo pedido desde la web:");
    lines.push("");
    lines.push("🍕 Detalle del pedido:");
    cart.forEach((item) => {
      lines.push(`- ${item.qty}x ${item.name} ($${item.price} c/u)`);
    });
    lines.push("");
    lines.push(`💰 Total: $${total}`);
    lines.push("");
    lines.push("👤 Datos del cliente:");
    lines.push(`Nombre: ${customer.name || "-"}`);
    lines.push(`Dirección: ${customer.address || "-"}`);
    lines.push(`Teléfono: ${customer.phone || "-"}`);
    lines.push(`Entrega: ${customer.deliveryMethod || "-"}`);
    lines.push(`Pago: ${customer.paymentMethod || "-"}`);
    if (customer.comments) {
      lines.push("");
      lines.push("📝 Comentarios:");
      lines.push(customer.comments);
    }

    return lines.join("\n");
  };

  // 👉 Botón VERDE: envía el pedido por WhatsApp
  const handleClickDesktop = () => {
    if (isClosed && clientConfig.horario?.enabled) {
      alert(
        clientConfig.horario.mensajeCerrado ||
          "En este momento el local está cerrado."
      );
      return;
    }

    if (!cart || cart.length === 0) {
      alert("Agregá al menos un producto al pedido 🙂");
      return;
    }
    if (!customer?.name) {
      alert("Completá tu nombre antes de enviar el pedido.");
      return;
    }

    const phoneRaw = clientConfig.whatsapp || "+5491162123307";
    const phone = phoneRaw.replace(/[^\d]/g, "");

    const text = encodeURIComponent(buildMessage());
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
  };

  // 👉 Barra roja (mobile): solo hace scroll a “Mi pedido”
  const handleClickMobile = () => {
    if (isClosed && clientConfig.horario?.enabled) return;

    if (!cart || cart.length === 0) {
      const menu = document.getElementById("menu");
      if (menu) {
        menu.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    const cartSection = document.getElementById("cart");
    if (cartSection) {
      cartSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {/* Botón verde: visible en TODAS las vistas, no fijo */}
      <button
        className="btn btn-success w-100 btn-lg mb-3"
        onClick={handleClickDesktop}
        disabled={isClosed}
      >
        {isClosed ? "Local cerrado" : "Enviar pedido por WhatsApp"}
      </button>

      {/* Barra fija inferior SOLO en mobile */}
      <button
        type="button"
        onClick={handleClickMobile}
        disabled={isClosed}
        className="d-md-none border-0"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1050,
          backgroundColor: "#d63347",
          color: "#fff",
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 600,
          boxShadow: "0 -2px 8px rgba(0,0,0,0.25)",
        }}
      >
        <span>
          {itemCount === 0 ? "Ver menú" : "Ver mi pedido"}
        </span>
        <span
          style={{
            backgroundColor: "#fff",
            color: "#333",
            borderRadius: "999px",
            padding: "4px 10px",
            fontSize: "0.85rem",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span role="img" aria-label="carrito">
            🧺
          </span>
          <span>
            {itemCount} · ${total}
          </span>
        </span>
      </button>
    </>
  );
}
