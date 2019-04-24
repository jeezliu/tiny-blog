import page from 'page';
import routes from './routes';

const containner = document.getElementById('app');
const render = s => {
  console.log('renders', s);
  containner.innerHTML = s;
};

let list = '';
console.log(routes);
Object.keys(routes).forEach(route => {
  list += `<li><a href=${route}>${routes[route]}</a></li>`;
  page(route, () => import('../drafts' + route + '.md').then(({ default: s }) => {
    render(s);
  }))
});
console.log(list);
render('<ul>' + list + '</ul>');
page('/', () => render("<ul>" + list + "</ul>"));
page({ hashbash: true });

