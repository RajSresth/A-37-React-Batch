import React, { useState } from "react";

const Modal = ({closeModal}) => {
  return (
      <div
        className="dialog"
        style={{
          background: "#fff",
          border: "0.5px solid grey",
          borderRadius: "25px",
          padding: "1.5rem",
          width: "100%",
          maxWidth: "480px",
          position: "fixed",
          zIndex:999,
          top:"50%",
          left: "50%",
          transform:"translate(-50%,-50%)"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 500 }}>
            Shopify
          </h2>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "black",
              width: "initial",
            }}
            onClick={() => closeModal(false)}
          >
            ✕
          </button>
        </div>
        <div>Welcome to Our Website</div>
      </div>
  );
};

export default Modal;
