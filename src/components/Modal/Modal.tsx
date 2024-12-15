import s from './Modal.css';
import { connect, dispatch } from '../../store';
import { Content } from './Content';

const close = () => dispatch('openModal', null);

export const Modal: JSX.FC = () => {
  const closeModal: JSX.EventListener<HTMLDialogElement> = (event) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  const ready: JSX.Ref<HTMLDialogElement> = (node) =>
    connect('open', ({ open, currentItem }) => {
      if (open && currentItem) {
        node.append(
          <Content
            image={currentItem.image}
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
