interface Props {
  date: string;
}

export const Time: JSX.FC<Props> = ({ date }) => {
  const t = new Date(date);

  return (
    <time
      dateTime={t.toISOString()}
      title={t.toLocaleString([], {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    >
      {t.toLocaleString([], {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })}
    </time>
  );
};
