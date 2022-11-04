import ModalBackground from "./ModalBackground";
import "./Modal.css";

function Modal(props) {
  return (
    <ModalBackground onCloseModal={props.onCloseModal}>
      <div className="modal">
        <div className="modal-header">
          <p>{props.header}</p>
        </div>
        <div className="modal-body">
          <p>{props.body}</p>
          <button
            className="modal-button"
            type="button"
            onClick={props.onCloseModal}
          >
            Okay
          </button>
        </div>
      </div>
    </ModalBackground>
  );
}

export default Modal;
