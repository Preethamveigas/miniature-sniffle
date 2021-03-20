import { Link } from 'react-router-dom';
import useBasePath from '@/hooks/useBasename';

export default ({
  children, to, from, ...rest
}) => {
  const pathname = useBasePath();
  const routeIgnore = ['/resetpassword', '/login'];
  const linkto = routeIgnore.includes(to) ? to : `/${pathname + to}`;
  console.log(pathname + to, linkto, 'pathname');
  return (
    <Link to={linkto} {...rest}>
      {children}
    </Link>
  );
};
