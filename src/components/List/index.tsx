import { connect } from '../../store';

export const List: JSX.FC = () => {
  const ready: JSX.Ref<HTMLDivElement> = (node) => {
    connect('items', (state) => {
      node.replaceChildren(JSON.stringify(state));
    });
  };


  return (
    <div ref={ready} />
  );
};
