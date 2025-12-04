// src/components/UpsellModal.jsx
import { useState, useEffect } from "react";

export default function UpsellModal({
  show,
  onClose,
  upsellItems,
  onAdd,
  onRemoveOne, // queda por compatibilidad, aunque acá no lo usamos
  lastProduct,
}) {
  const [addedIds, setAddedIds] = useState([]); // para evitar agregar el mismo extra dos veces

  useEffect(() => {
    if (show) {
      setAddedIds([]);
    }
  }, [show]);

  if (!show) return null;

  const productName = lastProduct?.name || "tu pedido";
  const category = lastProduct?.category || "";
  const isHamburguesa = category === "Hamburguesas";

  const icon = isHamburguesa ? "🍔" : "🍽️";
  const title = isHamburguesa
    ? `¿Le sumamos algo a tu hamburguesa? ${icon}`
    : `¿Le sumamos algo a tu pedido? ${icon}`;

  const itemsToShow = upsellItems || [];

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* HEADER */}
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Cerrar"
            ></button>
          </div>

          {/* BODY */}
          <div className="modal-body upsell-scroll-area">
            <p className="small text-muted mb-3">
              Estás armando <strong>{productName}</strong>.  
              Te dejamos algunos adicionales para acompañar:
            </p>

            {itemsToShow.length === 0 ? (
              <p>No hay productos sugeridos.</p>
            ) : (
              <ul className="list-group">
                {itemsToShow.map((item) => {
                  const isAdded = addedIds.includes(item.id);

                  return (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <div className="fw-semibold">{item.name}</div>
                        <small className="text-muted">
                          +${item.price.toLocaleString("es-AR", {
                            minimumFractionDigits: 0,
                          })}
                        </small>
                      </div>
                      <button
                        className={
                          "btn btn-sm " +
                          (isAdded ? "btn-outline-success" : "btn-success")
                        }
                        disabled={isAdded}
                        onClick={() => {
                          if (!isAdded) {
                            onAdd(item);
                            setAddedIds((prev) => [...prev, item.id]);
                          }
                        }}
                      >
                        {isAdded ? "Agregado ✓" : "Agregar"}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* FOOTER */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Seguir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
