import React, {useState} from 'react';
import './App.css';
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";
import type {Config} from "./types";
import ModalBody from "./components/Modal/ModalBody";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const cancelModal = () => setShowModal(false);
  const cancelAlert = () => setShowAlert(false);

  const showStandardAlert = () => alert('Thank you for staying with us!');
  const cancel = () => setShowModal(false);


  const btnConfig: Config[] = [
    {type: 'primary', label: 'Continue', onClick: showStandardAlert},
    {type: 'danger', label: 'Close', onClick: cancel}
  ]


  return (
    <div className="App">
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-warning"
      >Show modal
      </button>
      <Modal show={showModal} title="This is demo modal title" onClose={cancelModal}>

        <ModalBody btnConfig={btnConfig} onBtnClick={cancelModal}/>

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
