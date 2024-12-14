import { connect } from '../../store';

export const List: JSX.FC = () => {
  const ready: JSX.Ref<HTMLUListElement> = (node) => {
    connect('items', ({ items }) => {
      if (items.length > 0) {
        const children = items.reduce<JSX.Element>((elem, item) => {
          elem.append(<li>{item.id}</li>);
          return elem;
        }, <></>);

        node.append(children);
      }
    });
  };


  return (
    <ul ref={ready} />
  );
};
