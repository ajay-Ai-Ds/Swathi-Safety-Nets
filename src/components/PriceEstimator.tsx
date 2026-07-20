"use client";

import React, { useState } from "react";

export default function PriceEstimator() {
  const [service, setService] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [rods, setRods] = useState("6");
  const [estimated, setEstimated] = useState(false);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [whatsappLink, setWhatsappLink] = useState("");

  const handleCalculate = () => {
    if (!service) {
      alert("Please select a service first.");
      return;
    }

    let minPrice = 0;
    let maxPrice = 0;
    let calcDetailsText = "";

    if (service === "cloth-hanger") {
      const rodPrices: Record<string, number> = {
        "4": 2200,
        "6": 2600,
        "8": 3000,
      };
      const basePrice = rodPrices[rods] || 2600;
      minPrice = basePrice;
      maxPrice = basePrice + 400;
      calcDetailsText = `Service: Ceiling Cloth Hangers (${rods} Rods)`;
    } else {
      const w = parseInt(width);
      const h = parseInt(height);

      if (!w || w <= 0 || !h || h <= 0) {
        alert("Please enter valid positive dimensions for width and height.");
        return;
      }

      const area = w * h;
      const rates: Record<string, { min: number; max: number; label: string }> = {
        pigeon: { min: 9, max: 15, label: "Pigeon Safety Nets" },
        balcony: { min: 11, max: 20, label: "Balcony Safety Nets" },
        "invisible-grill": { min: 90, max: 140, label: "Invisible Grills" },
        cricket: { min: 13, max: 22, label: "Cricket Practice Nets" },
        "child-pet": { min: 11, max: 20, label: "Children & Pet Safety Nets" },
      };

      const rate = rates[service];
      if (rate) {
        minPrice = area * rate.min;
        maxPrice = area * rate.max;
        calcDetailsText = `Service: ${rate.label} (${w} ft x ${h} ft = ${area} sq ft)`;
      }
    }

    setPriceMin(minPrice);
    setPriceMax(maxPrice);
    setEstimated(true);

    const whatsappText = encodeURIComponent(
      `Hi Swathi Safety Nets! I generated a cost estimate on your website calculator.\n\n` +
      `• ${calcDetailsText}\n` +
      `• Estimated Range: ₹${minPrice.toLocaleString("en-IN")} - ₹${maxPrice.toLocaleString("en-IN")}\n\n` +
      `I would like to book a free site inspection at my location. Please call me back.`
    );
    setWhatsappLink(`https://wa.me/919000182240?text=${whatsappText}`);
  };

  return (
    <div
      className="calculator-wrapper reveal revealed"
      style={{
        maxWidth: "900px",
        margin: "40px auto 0",
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: "30px",
        background: "var(--white)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-xl)",
        overflow: "hidden",
        border: "1px solid var(--gray-200)",
      }}
    >
      <div className="calc-card" style={{ padding: "40px", borderRight: "1px solid var(--gray-100)" }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label
              htmlFor="calc-service"
              style={{
                display: "block",
                fontWeight: 600,
                marginBottom: "8px",
                color: "var(--gray-800)",
                fontSize: "0.95rem",
              }}
            >
              <i className="fas fa-th-list" style={{ marginRight: "6px", color: "var(--blue-600)" }}></i> Select Service
            </label>
            <select
              id="calc-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid var(--gray-300)",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.95rem",
                fontFamily: "var(--font-body)",
                color: "var(--gray-700)",
                background: "var(--gray-50)",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <option value="" disabled>
                -- Choose a Service --
              </option>
              <option value="pigeon">Pigeon Safety Nets (₹9 - ₹15 / sq ft)</option>
              <option value="balcony">Balcony Safety Nets (₹11 - ₹20 / sq ft)</option>
              <option value="invisible-grill">Invisible Grills (₹90 - ₹140 / sq ft)</option>
              <option value="cricket">Cricket Practice Nets (₹13 - ₹22 / sq ft)</option>
              <option value="child-pet">Children & Pet Safety Nets (₹11 - ₹20 / sq ft)</option>
              <option value="cloth-hanger">Ceiling Cloth Hangers (Rod based pricing)</option>
            </select>
          </div>

          {service !== "cloth-hanger" && service !== "" && (
            <div
              className="dimensions-inputs"
              id="dim-inputs-block"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "20px" }}
            >
              <div className="form-group">
                <label
                  htmlFor="calc-width"
                  style={{
                    display: "block",
                    fontWeight: 600,
                    marginBottom: "8px",
                    color: "var(--gray-800)",
                    fontSize: "0.95rem",
                  }}
                >
                  <i className="fas fa-arrows-left-right" style={{ marginRight: "6px", color: "var(--blue-600)" }}></i>{" "}
                  Width (Feet)
                </label>
                <input
                  type="number"
                  id="calc-width"
                  min="1"
                  placeholder="e.g., 10"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid var(--gray-300)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="calc-height"
                  style={{
                    display: "block",
                    fontWeight: 600,
                    marginBottom: "8px",
                    color: "var(--gray-800)",
                    fontSize: "0.95rem",
                  }}
                >
                  <i className="fas fa-arrows-up-down" style={{ marginRight: "6px", color: "var(--blue-600)" }}></i>{" "}
                  Height (Feet)
                </label>
                <input
                  type="number"
                  id="calc-height"
                  min="1"
                  placeholder="e.g., 8"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid var(--gray-300)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>
            </div>
          )}

          {service === "cloth-hanger" && (
            <div className="form-group" id="rods-input-block" style={{ marginBottom: "20px" }}>
              <label
                htmlFor="calc-rods"
                style={{
                  display: "block",
                  fontWeight: 600,
                  marginBottom: "8px",
                  color: "var(--gray-800)",
                  fontSize: "0.95rem",
                }}
              >
                <i className="fas fa-bars" style={{ marginRight: "6px", color: "var(--blue-600)" }}></i> Number of Rods
              </label>
              <select
                id="calc-rods"
                value={rods}
                onChange={(e) => setRods(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid var(--gray-300)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.95rem",
                  background: "var(--gray-50)",
                  outline: "none",
                }}
              >
                <option value="4">4 Rods Pulley System (₹2,200)</option>
                <option value="6">6 Rods Pulley System (₹2,600)</option>
                <option value="8">8 Rods Pulley System (₹3,000)</option>
              </select>
            </div>
          )}

          <button
            type="button"
            className="btn btn-primary btn-calc"
            id="btn-calculate"
            onClick={handleCalculate}
            style={{
              width: "100%",
              padding: "14px",
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              background: "var(--gradient-primary)",
              color: "white",
              border: "none",
            }}
          >
            Calculate Estimate
          </button>
        </form>
      </div>

      <div
        className="calc-results"
        id="calc-results-card"
        style={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "var(--gray-50)",
          textAlign: "center",
        }}
      >
        {!estimated ? (
          <div className="results-placeholder" id="results-placeholder">
            <i className="fas fa-receipt" style={{ fontSize: "3rem", color: "var(--gray-400)", marginBottom: "15px" }}></i>
            <p style={{ color: "var(--gray-600)", fontSize: "0.95rem" }}>
              Enter details and click calculate to view your estimation.
            </p>
          </div>
        ) : (
          <div className="results-display" id="results-display" style={{ width: "100%" }}>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", color: "var(--gray-800)", marginBottom: "10px" }}>
              Estimated Price Range
            </h4>
            <div
              className="price-range-display"
              style={{
                margin: "15px 0 20px",
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "2.2rem",
                color: "var(--blue-900)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <span className="price-min" id="res-price-min">
                ₹{priceMin.toLocaleString("en-IN")}
              </span>
              <span className="price-separator" style={{ color: "var(--gray-400)", fontWeight: 300 }}>
                -
              </span>
              <span className="price-max" id="res-price-max">
                ₹{priceMax.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="results-badges" style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px" }}>
              <span
                className="badge"
                style={{
                  background: "var(--blue-100)",
                  color: "var(--blue-800)",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                <i className="fas fa-circle-check" style={{ marginRight: "4px" }}></i> Free Installation
              </span>
              <span
                className="badge"
                style={{
                  background: "var(--blue-100)",
                  color: "var(--blue-800)",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                <i className="fas fa-circle-check" style={{ marginRight: "4px" }}></i> Free Inspection
              </span>
            </div>
            <p className="results-note" style={{ fontSize: "0.8rem", color: "var(--gray-500)", lineHeight: 1.5, marginBottom: "25px" }}>
              Note: Final pricing depends on accurate measurements and specific options chosen during site inspection.
            </p>
            <div className="results-cta">
              <a
                href={whatsappLink}
                className="btn btn-whatsapp"
                id="btn-calc-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "12px",
                  fontWeight: 600,
                  borderRadius: "var(--radius-sm)",
                  background: "var(--gradient-whatsapp)",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <i className="fab fa-whatsapp"></i> Book Site Inspection
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
