import React from 'react';

interface Props extends React.PropsWithChildren {
  onBtnClick: () => void;
  type: string;
}

const DemoBtn: React.FC<Props> = ({onBtnClick, type, children}) => {

  return (
    <>
      <button
        onClick={onBtnClick}
        className={"d-block mt-3 mx-auto btn btn-" + type}
      >
        {children}
      </button>
    </>
  );
};

export default DemoBtn;