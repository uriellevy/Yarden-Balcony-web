import React from "react";
import "./styles/Modal.scss";
import PacmanLoader from "react-spinners/PacmanLoader";
const Modal = ({ setModalSubmit, isLoading }) => {
  const closeHandler = () => {
    setModalSubmit(false);
  };
  return (
    <>
      <div className="backdrop" />

      <div className={isLoading ? "modal-hidden" : "modal-container"}>
        {isLoading ? (
          <PacmanLoader color={"#fff"} loading={isLoading} size={50} />
        ) : (
          <div>
            <h2>ההודעה נשלחה בהצלחה</h2>
            <h3>!כבר חוזר אליכם</h3>
            <button className="modal-btn" onClick={closeHandler}>
              חזרה לאתר
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
