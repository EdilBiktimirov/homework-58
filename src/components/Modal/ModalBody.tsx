import React, {MouseEventHandler} from 'react';
import type {Config} from "../../types";

interface Props {
  onBtnClick: MouseEventHandler;
  btnConfig: Config[];
}

const ModalBody: React.FC<Props> = ({btnConfig, onBtnClick}) => {
  return (
    <>
      <div className="modal-body">
        This is demo modal content
      </div>
      <div className="modal-footer">
        <button
          className="btn btn-danger"
          onClick={onBtnClick}
        >
          Cancel
        </button>
        {btnConfig.map((element) => {
          return <button
            type="button"
            className={'btn btn-' + element.type}
            onClick={element.onClick}
            key={Math.random()}
          >{element.label}
          </button>
        })}
      </div>
    </>
  );
};

export default ModalBody;