import('@maxhub/max-ui').then(module => {
  console.log('Доступные экспорты:');
  console.log(Object.keys(module).filter(k => !k.startsWith('_')));
}).catch(err => {
  console.error('Ошибка загрузки модуля:', err.message);
});
