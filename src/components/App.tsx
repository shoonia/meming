import { readyStore } from '../store';
import { List } from './List';

export const App: JSX.FC = () => (
  <>
    <header>

    </header>
    <main ref={readyStore}>
      <List />
    </main>
    <footer>

    </footer>
  </>
);
