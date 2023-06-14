import type { IItem } from '../../store/types';
import { Time } from '../Time';
import s from './styles.css';

interface Props {
  item: IItem;
}

export const Post: JSX.FC<Props> = ({ item }) => (
  <article itemScope>
    <h2>
      {item.title || '***'}
    </h2>
    <figure>
      <img
        src={item.image.src}
        class={s.img}
        alt=""
      />
      <figcaption>
        {item.body}
      </figcaption>
    </figure>
    <Time date={item.date} />
  </article>
);
