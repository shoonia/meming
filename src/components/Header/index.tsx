import s from './styles.css';
import { SupportUkraine } from '../SupportUkraine';

export const Header: JSX.FC = () =>
  <header class={s.header}>
    <SupportUkraine />
  </header>;
