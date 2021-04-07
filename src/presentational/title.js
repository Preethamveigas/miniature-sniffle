import clsx from 'clsx';

export default ({
  title, xl3, xl4, m, bolder,
}) => (
  <div className={clsx(m)}>
    <h3
      className={clsx(
        xl4 && 'text-4xl',
        xl3 && 'text-3xl',
        bolder && 'font-extrabold',
        'leading-10',
        'text-gray-900',
        'sm:leading-none',
      )}
    >
      {title}
    </h3>
  </div>
);
