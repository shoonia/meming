import { readyStore } from '../store';
import { Footer } from './Footer';
import { List } from './List';

export const App: JSX.FC = () => (
  <>
    <header>

    </header>
    <main ref={readyStore}>
      <List />
    </main>
    <Footer />
  </>
);
