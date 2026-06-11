import React, { Activity,useEffect, useState,useRef, forwardRef, useImperativeHandle } from "react";
import { useTheme } from "../store/ThemeContext";
import Input from "../components/Input";
import { ErrorBoundary } from "react-error-boundary";
import FallbackUi from "../components/FallbackUi";
import Modal from "../components/Modal";
import {createPortal} from "react-dom";
import ShopCard from "../components/ShopCardJs";
import ShopCardCss from "../components/ShopCardCss";
import ShopCardJs from "../components/ShopCardJs";


const Shop = () => {
  const { theme, setTheme } = useTheme();
  const [status, setStatus] = useState(0);
  const [showModal, setShowModal] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const cardRef = useRef(null)
 

  // useEffect(()=> {
  //     const timeoutId = setTimeout(() => {
  //           setShowModal(true)
  //     }, 5000)

  //     return () => clearTimeout(timeoutId)
  // },[])


  useEffect(() => {
   
    const bodyChildren = Array.from(document.body.children);

    bodyChildren.forEach(element => {
      if(showModal)
      {
        if(!element.className.includes("dialog"))
        {
          element.setAttribute("arial-hidden",true);
          element.setAttribute("inert",true);
        }
      }
      else{
        element.removeAttribute("arial-hidden");
        element.removeAttribute("inert");
      }
    })
  },[showModal])



  const handleClick = () => {
    console.log(cardRef.current)
    if(cardRef.current.className.includes("hide"))
    {
      cardRef.current.classList.remove("hide");
    }
    else{
      cardRef.current.classList.add("hide");
    }
  }



  return (
    <div id="shop" className={theme}>
      <div className="center-container">
        
        <Activity mode={showCard?"visible": "hidden"}>
            <ShopCardJs />
        </Activity>
       <div className="shop-details">
          <button onClick={() => setShowCard(!showCard)}>Toggle JS</button> <br />
          <button onClick={handleClick}>Toggle CSS</button> 
         
        </div>

      {/* css conditional rendering */}
       {/* <ShopCardCss cardRef={cardRef} />  */}
       
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
        
       {showModal && createPortal(<Modal closeModal={setShowModal}/>, document.body)}
      </div>
    </div>
  );
};

export default Shop;



// forwardRef()
// useImperativeHandle()