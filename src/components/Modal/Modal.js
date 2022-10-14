import ModalBackground from "./ModalBackground";
import "./Modal.css";

function Modal(props) {
  return (
    <ModalBackground>
      <div className="modal">
        <div className="modal-header">
          <p>Message</p>
        </div>
        <div className="modal-body">
          <p>Body text</p>
        <button className="modal-button" type="button">Okay</button>
        </div>
      </div>
    </ModalBackground>
  );
}

export default Modal;
