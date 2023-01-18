import React, {useState, createRef, useEffect} from "react";
import "./myModal.css";
interface MyModalI{
 children:React.ReactNode;
 description:string
}
export default function MyModal(props:MyModalI) {
    const modalRef = createRef<HTMLDivElement>();
    const modalContentRef = createRef<HTMLDivElement>();
    const spanRef = createRef<HTMLDivElement>();
    const handleModal = (d:string)=>{
        if (modalRef.current) {
            modalRef.current.style.display = d;
        }
    }
    
  return (
    <>
      <div onClick={()=>handleModal("block")}>
        {props.children}
      </div>
      <div ref={modalRef} id="myModal" className="modal">
        <div ref={modalContentRef} className="modal-content">
          <span ref={spanRef} className="close" onClick={()=>handleModal("none")}>&times;</span>
          {
            props.children
          }
          <div >
            {props.description}
          </div>
        </div>
      </div>
    </>
  );
}


