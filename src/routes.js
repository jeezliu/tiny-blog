const context = require.context('../drafts', false, /\.md$/);
const routes = context.keys().filter(key => /\.\/.*\.md$/.test(key)).reduce((acc, key) => {
  const name = key.slice(2, -3);
  return {
    ...acc,
    ['/' + name]: name
  }
}, {});
export default routes;
