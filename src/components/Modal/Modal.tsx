import s from './Modal.css';
import { connect, setState } from '../../store';
import { Content } from './Content';

const close = () => setState({ openItem: null });

export const Modal: JSX.FC = () => {
  const closeModal: JSX.EventListener<HTMLDialogElement> = (event) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  const ready: JSX.Ref<HTMLDialogElement> = (node) =>
    connect('openItem', ({ openItem }) => {
      if (openItem) {
        node.append(
          <Content
            image={openItem.image}
            close={close}
          />,
        );
        node.showModal();
      } else {
        node.close();
        node.replaceChildren(<></>);
      }
    });

  return (
    <dialog
      ref={ready}
      class={s.modal}
      on:close={close}
      on:click={closeModal}
    />
  );
};
