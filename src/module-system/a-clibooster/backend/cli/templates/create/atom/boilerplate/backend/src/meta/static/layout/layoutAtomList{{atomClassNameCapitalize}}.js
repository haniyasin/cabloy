// const moduleInfo = module.info;
module.exports = app => {
  const content = {
    layouts: {
      table: {
        blocks: {
          items: {
            columns: [
              {
                dataIndex: 'atomName',
                title: 'Atom Name',
                align: 'left',
                renderType: 'atomName',
              },
              {
                dataIndex: 'description',
                title: 'Description',
                align: 'left',
              },
              {
                dataIndex: 'userIdCreated',
                title: 'Creator',
                align: 'left',
                renderType: 'userName',
              },
              {
                dataIndex: 'atomCreatedAt',
                title: 'Created Time',
                align: 'center',
                params: {
                  dateFormat: {
                    lines: true,
                  },
                },
              },
              {
                dataIndex: 'atomUpdatedAt',
                title: 'Modification Time',
                align: 'center',
                params: {
                  dateFormat: {
                    lines: true,
                  },
                },
              },
            ],
          },
        },
      },
    },
  };
  const layout = {
    atomName: '<%=argv.atomClassNameCapitalize%>',
    atomStaticKey: 'layoutAtomList<%=argv.atomClassNameCapitalize%>',
    atomRevision: 0,
    description: '',
    layoutTypeCode: 3,
    content: JSON.stringify(content),
    resourceRoles: 'root',
  };
  return layout;
};
