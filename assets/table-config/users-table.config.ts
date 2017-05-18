export const TABLE_USERS = {
  columns: [
    {
      title: 'Name',
      name: 'name',
      className: ['column-name']
    },
    {
      title: 'User name',
      className: ['column-username'],
      name: 'username'
    },
    {
      title: 'Street',
      className: ['column-street'],
      name: 'address.street'
    },
    {
      title: 'Suite',
      className: ['column-suite'],
      name: 'address.suite'
    },
    {
      title: 'City',
      className: ['column-city'],
      name: 'address.city'
    },
    {
      title: 'Zip-code',
      className: ['column-zipcode'],
      name: 'address.zipcode'
    }
  ],
  page: 1,
  itemsPerPage: 10,
  maxSize: 5,
  numPages: 1,
  length: 0,

  config: {
    paging: true,
    sorting: {
      columns: this.columns
    }
    ,
    filtering: {
      filterString: ''
    }
    ,
    className: ['xc-users']
  }
}
