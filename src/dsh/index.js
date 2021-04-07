import { Link } from '@/components/common';
import clx from 'clsx';
import Logo from './assets/logo.png';
import AfyaLogo from '@/assets/icons/logo.svg';

import './dsh.styles.scss';
import { Card, Title } from '@/presentational';

const c = (
  <div className="flex items-center">
    HubChat Powered by Afya
    <AfyaLogo className="block w-16 h-10" />
  </div>
);
export default () => (
  <>
    <div className="relative flex flex-col landing-dsh px-4 max-h-screen h-screen overflow-hidden">
      <div
        className={clx(
          'mask',
          'max-h-screen h-screen absolute left-0 z-0',
        )}
      />
      <header>
        <div className="mt-8 w-72 h-auto z-10 relative">
          <img src={Logo} className="w-24 h-auto" />
        </div>
      </header>
      <section
        className={clx(
          'flex mx-auto h-full w-11/12',
          'items-center',
          'md:mx-0',
          //   'md:transform translate-x-0 -translate-y-2/4',
        )}
      >
        <div
          className={clx(
            'relative block bg-white',
            'rounded-lg',
            'px-6 py-6',
            'md:bg-transparent',
            'w-11/12',
            'md:w-2/4',
          )}
        >
          <Title bolder xl3 title="HubChat:" />
          <Title m="mb-2 mt-4" xl3 title="Convenient and Faster" />
          <Title m="mb-7 mt-1" xl3 title="Access to Specialty Care" />

          <div
            className={clx(
              'relative flex z-10 h-16 w-full md:w-2/4 lg:w-3/4',
              'text-center',
              'md:w-full',
            )}
          >
            <Link
              to="/login"
              className={clx(
                'dsh-login',
                'flex justify-center items-center',
                'w-full px-3 py-4',
                'text-white text-center font-black text-xl',
                'bg-yellow hover:bg-yellow-light focus:bg-yellow-light focus:outline-none',
                'rounded-md shadow-lg',
              )}
            >
              Proceed to Login
            </Link>
          </div>

          <div className="block relative mt-7">
            <Title m="mb-5" title={c} />

            <Title
              bolder
              title="DSH/Afya Support: ‪(909) 907-4005 or (833) 500-0482"
            />
          </div>
        </div>
      </section>
    </div>
    <section className="fixed mx-auto w-full bottom-0 py-5 px-5">
      <div className="flex w-full px-4">
        <Link to="terms">
          <Title bolder m="mr-5" title="Terms & Conditions" />
        </Link>
        <Link to="privacy">
          <Title bolder title="Privacy Policy" />
        </Link>
      </div>
    </section>
  </>
);
