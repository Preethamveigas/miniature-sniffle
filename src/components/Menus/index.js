import Menu from '@/components/Menus/MenuItems';
import MobileMenu from '@/components/Menus/MobileMenu';
import Logo from '@/assets/icons/logo.svg';
import { Link } from 'react-router-dom';

export default () => (
  <>
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <Link to="/home">
        <span className="sr-only">Afya</span>
        <span className="h-8 w-8 sm:h-10">
          <Logo />
        </span>
      </Link>
    </div>
    <MobileMenu />
    <nav className="hidden md:flex space-x-10">
      <Menu />
    </nav>
  </>
);
