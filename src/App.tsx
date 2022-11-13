import React, {useState} from 'react';
import './App.css';
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const cancelModal = () => setShowModal(false);
  const cancelAlert = () => setShowAlert(false);


  return (
    <div className="App">
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-warning"
      >Show modal
      </button>
      <Modal show={showModal} title="This is demo modal title" onClose={cancelModal}>
        <div className="modal-body">
          This is demo modal content
        </div>
        <div className="modal-footer">
        <button
          className="btn btn-danger"
          onClick={cancelModal}
        >
          Cancel
        </button>
        </div>
      </Modal>


      <Alert type={'warning'} onDismiss={cancelAlert} show={showAlert}>Text</Alert>
      <button
        onClick={() => setShowAlert(true)}
        className="btn btn-warning"
      >Show alert
      </button>
    </div>
  );
}

export default App;
