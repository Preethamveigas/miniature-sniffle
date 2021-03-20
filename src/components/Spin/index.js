import './spin.styles.scss';
import Logo from '@/assets/icons/logo.svg';

export default () => (
  <div className="w-full h-full fixed flex items-center  top-0 left-0 bg-white opacity-75 z-50">
    <div className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block">
      <div className="relative block">
        <div
          className="spin_loader ease-linear rounded-full border-8 border-t-8"
          style={{
            background: '#f1f2f4',
            height: '10rem',
            width: '10rem',
          }}
        />
        <Logo
          style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            width: '9rem',
            height: '9rem',
          }}
        />
      </div>
    </div>
  </div>
);
