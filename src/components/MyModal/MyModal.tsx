import React, {useState, createRef, useContext} from "react";
import { MyContext } from "../../App";
import MyButton from "../MyButton/MyButton";
import "./myModal.css";
interface MyModalI{
 children:React.ReactNode;
 description:string,
 id: number
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
    const { products, setProducts } = useContext(MyContext);
    const handleDelete = () => {
      const filtered = products.filter((item) => item.id !== props.id);
      setProducts(filtered);
      handleModal("none")
    };
  return (
    < >
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
        <div className="del" onClick={handleDelete}>
          <MyButton btnName="Delete" />
        </div>
        </div>
      </div>
    </>
  );
}


