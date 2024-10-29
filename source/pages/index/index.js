import './index.scss';

import createMenu from '../../components/menu/menu';
let menu = createMenu(['Главная', 'Блог'], 'menu');
document.body.appendChild(menu);

console.log('in index.js')