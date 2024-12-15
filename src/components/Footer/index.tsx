import s from './styles.css';
import { connect, dispatch } from '../../store';

export const Footer: JSX.FC = () => {
  const observer: JSX.Ref<HTMLElement> = (node) =>
    new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch('scroll');
        }
      }),
    ).observe(node);

  const loader: JSX.Ref<HTMLElement> = ({ classList }) =>
    connect('loading', ({ loading }) =>
      loading
        ? classList.add(s.loader)
        : classList.remove(s.loader),
    );

  return (
    <footer
      ref={observer}
      class={s.footer}
    >
      <div ref={loader}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </footer>
  );
};
