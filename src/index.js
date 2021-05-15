import 'core-js/stable';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { GetRoutes } from '@/Routes'
import Bold from '@/assets/fonts/TTCommons-Bold.woff2';
import medium from '@/assets/fonts/TTCommons-DemiBold.woff2';
import Regular from '@/assets/fonts/TTCommons-Regular.woff2';

function AddFonts(font, type, des) {
  const junction_font = new FontFace(type, `url(${font})`, des);
  junction_font
    .load()
    .then((loaded_face) => {
      document.fonts.add(loaded_face);
      document.body.style.fontFamily = `${type} 'TTCommons'`;
    })
    .catch((error) => {
      // error occurred
    });
}

AddFonts(Bold, 'TTCommons', { family: 'TT Commons DemiBold', weight: 600, style: 'normal' });
AddFonts(Regular, 'TTCommons', { family: 'TT Commons Regular', weight: 'normal', style: 'normal' });
AddFonts(medium, 'TTCommons', { family: 'TT Commons Medium', weight: 500, style: 'normal' });

let path = document.location.pathname.split('/')[1] || 'home';
const whiteapps = ['hubmd', 'wise'];
path = whiteapps.includes(path) ? path : 'home';

const Routes = GetRoutes(document.location.origin)
ReactDOM.render(
  <App baseName={path || ''} Routes={Routes} />,
  document.getElementById('app'),
);

