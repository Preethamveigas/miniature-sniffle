import { Link } from 'react-router-dom';
import useBasePath from '@/hooks/useBasename';

export default ({ children, to, from }) => {
  const pathname = useBasePath();
  return (
    <Link to={`/${pathname}${to}`}>
      {children}
      {' '}
    </Link>
  );
};
