import { readyStore } from '../store';
import { List } from './List';

export const App: JSX.FC = () => (
  <main ref={readyStore}>
    <List />
  </main>
);
