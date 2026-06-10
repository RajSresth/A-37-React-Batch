import React, { useEffect, useState } from "react";
import { useTheme } from "../store/ThemeContext";
import Input from "../components/Input";
import { ErrorBoundary } from "react-error-boundary";
import FallbackUi from "../components/FallbackUi";
import Modal from "../components/Modal";
import { createPortal } from "react-dom";

const Shop = () => {
  const { theme, setTheme } = useTheme();
  const [status, setStatus] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const bodyChildren = Array.from(document.body.children);

    bodyChildren.forEach((child) => {
      if (showModal) {
        if (!child.classList.contains("dialog")) {
          child.setAttribute("inert", "");
          child.setAttribute("aria-hidden", "true");
        }
      } else {
        child.removeAttribute("inert");
        child.removeAttribute("aria-hidden");
      }
    });
  }, [showModal]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="shop" className={theme}>
      <div className="center-container">
        <div className="shop-details">
          <h2>Welcome to Shop Page</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum
            architecto laborum sequi esse incidunt quisquam consequatur nam
            ratione qui.
          </p>

          <p>
            Nemo illum architecto laborum sequi esse incidunt quisquam
            consequatur nam ratione qui.
          </p>

          <button onClick={() => setTheme("dark")}>Dark</button>
        </div>
        <div className="shop-details">
          <h2>Welcome to Shop Page</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum
            architecto laborum sequi esse incidunt quisquam consequatur nam
            ratione qui.
          </p>

          <p>
            Nemo illum architecto laborum sequi esse incidunt quisquam
            consequatur nam ratione qui.
          </p>
          <button onClick={() => setTheme("light")}>Light</button>
        </div>
        <div className="shop-details">
          <Input
            labelName="Username"
            type="text"
            status={status}
            setStatus={setStatus}
            onReset={() => setStatus(0)}
            resetKeys={[status]}
          />
        </div>
        {showModal &&
          createPortal(<Modal closeModal={setShowModal} />, document.body)}
      </div>
    </div>
  );
};

export default Shop;
