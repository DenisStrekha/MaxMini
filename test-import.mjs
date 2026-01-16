import('@maxhub/max-ui').then(module => {
  console.log('Button доступен?', typeof module.Button);
  console.log('Panel доступен?', typeof module.Panel);
  console.log('Typography доступен?', typeof module.Typography);
}).catch(err => console.error('Ошибка импорта:', err));
