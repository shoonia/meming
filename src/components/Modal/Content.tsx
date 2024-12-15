import s from './Content.css';
import type { IImage } from '../../api';

interface Props {
  image: IImage;
  close: JSX.EventListener
}

export const Content: JSX.FC<Props> = ({ image, close }) =>
  <div>
    <button
      type="button"
      aria-label="close"
      class={s.close}
      on:click={close}
    />
    <img
      src={image.src}
      width={image.width}
      height={image.height}
      class={s.image}
      crossOrigin="anonymous"
      alt=""
    />
  </div>;
