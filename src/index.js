import 'core-js/stable';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

import Bold from '@/assets/fonts/OpenSans-Bold.ttf';
import medium from '@/assets/fonts/OpenSans-SemiBold.ttf';
import Light from '@/assets/fonts/OpenSans-Light.ttf';
import Regular from '@/assets/fonts/OpenSans-Regular.ttf';

function AddFonts(font, type) {
  const junction_font = new FontFace(type, `url(${font})`);
  junction_font
    .load()
    .then((loaded_face) => {
      document.fonts.add(loaded_face);
      // document.body.style.fontFamily = `${type} Arial`;
    })
    .catch((error) => {
      // error occurred
      console.log(error, 'ffont face');
    });
}

AddFonts(Bold, 'sans-bold');
AddFonts(Regular, 'sans-regular');
AddFonts(Light, 'sans-light');
AddFonts(medium, 'sans-medium');

let path = document.location.pathname.split('/')[1] || 'home';
const whiteapps = ['hubmd', 'wise'];
path = whiteapps.includes(path) ? path : 'home';
console.log(path, 'path');

ReactDOM.render(
  <App baseName={path || ''} />,
  document.getElementById('app'),
);
