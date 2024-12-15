import s from './styles.css';
import { connect } from '../../store';
import { Post } from '../Post';

export const List: JSX.FC = () => {
  const ready: JSX.Ref<HTMLUListElement> = (node) => {
    connect('items', ({ items }) => {
      if (items.length > 0) {
        node.append(
          items.reduce((elem, item, index) => {
            elem.append(
              <li class={s.item}>
                <Post lazy={index > 1} {...item} />
              </li>,
            );
            return elem;
          }, <></>),
        );
      }
    });
  };


  return (
    <ul ref={ready} class={s.list} />
  );
};
