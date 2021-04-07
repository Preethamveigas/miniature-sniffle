import clx from 'clsx';

export default ({ children, style }) => (
  <div
    className={clx(
      'block mt-auto mb-auto bg-white lg:shadow-lg',
      'rounded-lg',
      'px-6 py-6',
      style,
    )}
  >
    {children}
  </div>
);
