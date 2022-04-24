module.exports = app => {
  return {
    bean: 'create.module',
    resource: {
      atomStaticKey: 'cliCreate',
    },
    info: {
      version: '4.0.0',
      title: 'Cli: Create Module',
      usage: 'npm run cli :create:module modulePath -- [--template=?]',
    },
    options: {
      template: {
        description: 'template',
        type: 'string',
      },
    },
    groups: {
      default: {
        questions: {
          template: {
            type: 'select',
            message: 'Specify the module template',
            choices: [
              { name: 'module', message: 'cabloy module template' },
              { name: 'module-business', message: 'cabloy business module template' },
              { name: 'module-business-details', message: 'cabloy business module template with details"' },
              { name: 'module-icon', message: 'cabloy icon module template' },
            ],
          },
        },
      },
      moduleInfo: {
        questions: {
          name: {
            type: 'input',
            message: 'module name',
          },
          description: {
            type: 'input',
            message: 'module description',
          },
          author: {
            type: 'input',
            message: 'module author',
          },
        },
      },
      atomClassInfo: {
        questions: {
          providerId: {
            type: 'input',
            message: 'providerId',
          },
          atomClassName: {
            type: 'input',
            message: 'atomClassName',
          },
        },
      },
    },
  };
};
