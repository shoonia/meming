import s from './styles.css';
import type { IItem } from '../../api';
import { setState } from '../../store';

interface Props {
  item: IItem;
  lazy: boolean;
}

export const Post: JSX.FC<Props> = ({ item, lazy }) => {
  const { title, body, image, date } = item;

  const click: JSX.EventListener<HTMLButtonElement> = () =>
    setState({ openItem: item });

  return (
    <article itemScope class={s.post}>
      <h2 class={s.title}>
        {title
          ? title
          : <span role="presentation">***</span>
        }
      </h2>
      <figure class={s.box}>
        <button
          type="button"
          class={s.btn}
          on:click={click}
        >
          <img
            {...image}
            class={s.image}
            crossOrigin="anonymous"
            fetchPriority={lazy ? 'low' : undefined}
            decoding={lazy ? 'async' : undefined}
            loading={lazy ? 'lazy' : undefined}
            alt=""
          />
        </button>
        <figcaption>
          {body && <p>{body}</p>}
        </figcaption>
      </figure>
      <time dateTime={date}>
        {new Date(date).toLocaleDateString()}
      </time>
    </article>
  );
};
