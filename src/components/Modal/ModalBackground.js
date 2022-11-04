import { useRef } from "react";
import "./ModalBackground.css";

function ModalBackground(props) {
  const modalBackgroundRef = useRef();
  
  return (
    <div
      className="modal-background"
      ref={modalBackgroundRef}
      onClick={(e) => {
        e.target === modalBackgroundRef.current && props.onCloseModal();
      }}
    >
      {props.children}
    </div>
  );
}

export default ModalBackground;
