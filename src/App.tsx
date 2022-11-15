import React, {useState} from 'react';
import './App.css';
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";
import type {Config} from "./types";
import ModalBody from "./components/Modal/ModalBody";
import DemoBtn from "./components/DemoBtn/DemoBtn";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlertWhitBtn, setShowAlertWhitBtn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const cancelModal = () => setShowModal(false);
  const cancelAlert = () => setShowAlertWhitBtn(false);

  const showStandardAlert = () => alert('Thank you for staying with us!');
  const cancel = () => setShowModal(false);

  const btnConfig: Config[] = [
    {type: 'primary', label: 'Continue', onClick: showStandardAlert},
    {type: 'danger', label: 'Close', onClick: cancel}
  ];

  return (
    <div className="App">
      <DemoBtn onBtnClick={() => setShowModal(true)} type={"info"}>Show modal</DemoBtn>
      <Modal show={showModal} title="This is demo modal title" onClose={cancelModal}>
        <ModalBody btnConfig={btnConfig} onBtnClick={cancelModal}/>
      </Modal>

      <Alert type={'warning'} onDismiss={cancelAlert} show={showAlertWhitBtn}>This is a warning type alert</Alert>
      <DemoBtn onBtnClick={() => setShowAlertWhitBtn(true)} type={"warning"}>Show alert whit close button</DemoBtn>
      <Alert type={'success'} show={showAlert}>This is a success type alert</Alert>
      <DemoBtn onBtnClick={() => setShowAlert(true)} type={"success"}>Show alert</DemoBtn>
    </div>
  );
}

export default App;
