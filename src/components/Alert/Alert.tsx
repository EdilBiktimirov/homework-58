import React from 'react';

interface Props extends React.PropsWithChildren {
  type: string;
  onDismiss?: () => void;
  show: boolean;
}

const Alert: React.FC<Props> = ({type, onDismiss, show, children}) => {


  return (
    <>
      <div
        className={"alert alert-" + type}
        style={{display: show ? 'block': 'none'}}
        role="alert"
      >
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onDismiss}
          style={{display: onDismiss ? 'block': 'none'}}
        >

        </button>
        {children}

      </div>

    </>

  );
};

export default Alert;