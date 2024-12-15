import { readyStore } from '../store';
import { Header } from './Header';
import { List } from './List';
import { Modal } from './Modal';
import { Footer } from './Footer';

export const App: JSX.FC = () =>
  <>
    <Header />
    <main ref={readyStore}>
      <List />
    </main>
    <Modal />
    <Footer />
  </>;
