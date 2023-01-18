import {useState, createRef, useEffect} from "react";
import "./myModal.css";

export default function MyModal() {
    const modalRef = createRef<HTMLDivElement>();
    const modalContentRef = createRef<HTMLDivElement>();
    const spanRef = createRef<HTMLDivElement>();
    const handleModal = (d:string)=>{
        if (modalRef.current) {
            modalRef.current.style.display = d;
        }
    }
    window.onclick = (e) =>{
        if (modalRef.current && e.target == modalRef.current ) {
            modalRef.current.style.display = "none";
        }
        
    }
    
  return (
    <div>
      <button id="myBtn" onClick={()=>handleModal("block")}>Open Modal</button>
      <div ref={modalRef} id="myModal" className="modal">
        <div ref={modalContentRef} className="modal-content">
          <span ref={spanRef} className="close" onClick={()=>handleModal("none")}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </div>
  );
}


