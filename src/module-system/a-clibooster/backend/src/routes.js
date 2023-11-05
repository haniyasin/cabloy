module.exports = app => {
  const routes = [
    {
      method: 'get',
      path: 'tools/demo/:method',
      controller: 'tools',
      action: 'demo',
      meta: {
        right: { type: 'resource', module: 'a-clibooster', name: 'cliTools' },
        gate: { env: 'local' },
      },
    },
  ];
  return routes;
};
