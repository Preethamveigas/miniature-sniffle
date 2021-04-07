import { Link } from '@/components/common';
import Logo from './assets/logo.png';
import './dsh.styles.scss';
import clx from 'clsx';

export default ({ children }) => (
  <div className="landing-dsh px-4 max-h-screen h-screen overflow-hidden">
    <div className="mt-8 w-auto h-auto z-10 relative">
      <Link to="/" className="inline-block relative">
        <img src={Logo} className="w-24 h-auto" />
      </Link>
    </div>
    <div
      className={clx(
        'absolute w-11/12 left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4',
        'md:w-6/12',
        'xl:w-2/5',
      )}
    >
      {children}
    </div>
  </div>
);
