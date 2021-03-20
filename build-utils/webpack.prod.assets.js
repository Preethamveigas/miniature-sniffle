const imagemin = require('imagemin');
const webp = require('imagemin-webp');
// const imageminOptipng = require('imagemin-optipng');
const path = require('./paths');

imagemin([`${path.src}/assets/icons/*.{jpg,png,svg}`], {
  destination: `${path.src}/assets/icons/webp/`,
  plugins: [webp({ lossless: true })],
}).then(() => console.log('images comppresion is done'));

// imagemin(['src/icons/*.png'], {
//   destination: 'src/icons/new',
//   plugins: [imageminPngquant({ quality: 10 })],
// }).then(() => console.log('imageminPngquant comppresion is done'));
