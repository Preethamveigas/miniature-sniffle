import clsx from 'clsx';

export const Title = ({ title }) => (
  <div className="my-10">
    <h3
      className="text-4xl
    tracking-tight
    leading-10
    font-extrabold
    text-gray-900
    sm:text-5xl
    sm:leading-none
    md:text-6xl"
    >
      {title}
    </h3>
  </div>
);
