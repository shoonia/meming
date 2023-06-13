import s from './styles.css';
import { connect } from '../../store';

export const List: JSX.FC = () => {
  const ready = (node: HTMLUListElement) => {
    connect('items', ({ items }) => {
      const list = /*__PURE__*/ items.map((i) => {
        return (
          <li>{i.date}</li>
        );
      });

      node.replaceChildren(
        <>
          {list}
        </>,
      );
    });
  };

  return (
    <ul ref={ready} class={s.list} />
  );
};
