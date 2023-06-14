import s from './styles.css';
import { connect } from '../../store';
import { Post } from '../Post';

export const List: JSX.FC = () => {
  const ready = (node: HTMLUListElement) => {
    connect('items', ({ items }) => {
      const list = items.map((i) => {
        return (
          <li class={s.item}>
            <Post item={i} />
          </li>
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
