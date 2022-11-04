import { useRef } from "react";
import ReactDOM from "react-dom";
import "./ModalOverlay.css";
import "./ModalBackground.css";

function ModalBackdrop(props) {
  const modalBackgroundRef = useRef();

  return (
    <div
      className="modal-background"
      ref={modalBackgroundRef}
      onClick={(e) => {
        e.target === modalBackgroundRef.current && props.onCloseModal();
      }}
    />
  );
}

function ModalOverlay(props) {
  return (
    <div className="modal-overlay">
      <div className="modal-overlay-header">
        <p>{props.header}</p>
      </div>
      <div className="modal-overlay-body">
        <p>{props.body}</p>
        <button
          className="modal-overlay-button"
          type="button"
          onClick={props.onCloseModal}
        >
          Okay
        </button>
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("modal-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          header={props.header}
          body={props.body}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default Modal;
