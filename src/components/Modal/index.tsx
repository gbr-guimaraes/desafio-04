import { ReactNode, useEffect, useState } from 'react';
import ReactModal from 'react-modal';

interface Props{
  isOpen:boolean,
  children:ReactNode,
  setIsOpen:() => void
}

const Modal = ({isOpen, children, setIsOpen}:Props) => {

  const [state, setState] = useState(isOpen);

  useEffect(() => {
    setState(isOpen);
  }, [isOpen])

    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={state}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    );
  
};

export default Modal;
