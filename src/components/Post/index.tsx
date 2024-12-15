import s from './styles.css';
import type { IItem } from '../../api';
import { dispatch } from '../../store';

interface Props extends IItem {
  lazy: boolean;
}

export const Post: JSX.FC<Props> = (props) => {
  const { title, body, image, date, lazy } = props;

  const click: JSX.EventListener<HTMLButtonElement> = () =>
    dispatch('openModal', props);

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
          {body}
        </figcaption>
      </figure>
      <time dateTime={date}>
        {new Date(date).toLocaleDateString()}
      </time>
    </article>
  );
};
