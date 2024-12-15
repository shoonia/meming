import s from './styles.css';
import type { IItem } from '../../api';

interface Props extends IItem {
  lazy: boolean;
}

export const Post: JSX.FC<Props> = ({ title, body, image, date, lazy }) => {

  return (
    <article itemScope class={s.post}>
      <h2>
        {title
          ? title
          : <span role="presentation">***</span>
        }
      </h2>
      <figure class={s.box}>
        <img
          {...image}
          class={s.image}
          crossOrigin="anonymous"
          fetchPriority={lazy ? 'low' : undefined}
          decoding={lazy ? 'async' : undefined}
          loading={lazy ? 'lazy' : undefined}
          alt=""
        />
        <figcaption>
          {body}
        </figcaption>
      </figure>
      <time dateTime={date}>
        {new Date(date).toLocaleDateString()}
      </time>
    </article>
  );
};
