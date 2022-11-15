import React from 'react';
import {motion, AnimatePresence} from "framer-motion";

interface Props extends React.PropsWithChildren {
  type: string;
  onDismiss?: () => void;
  show: boolean;
}

const Alert: React.FC<Props> = ({type, onDismiss, show,children}) => {

  return (
    <>
      <AnimatePresence>
        {
          show && (
            <motion.div
              className={"alert m-2 alert-" + type }
              role="alert"
              style={{height: '100px'}}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 1.5}}
            >
              <button
                type="button"
                className="btn-close ms-auto"
                aria-label="Close"
                onClick={onDismiss}
                style={{display: onDismiss ? 'block' : 'none'}}
              >
              </button>
              {children}
            </motion.div>
          )
        }
      </AnimatePresence>
    </>
  );
};

export default Alert;