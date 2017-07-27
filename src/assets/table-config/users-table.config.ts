export const TABLE_USERS = {
  columns: [
    {
      name: 'Name',
      cellClass: 'column-name',
      prop: 'name'
    },
    {
      name: 'User name',
      cellClass: 'column-username',
      prop: 'username'
    },
    {
      name: 'Street',
      cellClass: 'column-street',
      prop: 'address.street'
    },
    {
      name: 'Suite',
      cellClass: 'column-suite',
      prop: 'address.suite'
    },
    {
      name: 'City',
      cellClass: 'column-city',
      prop: 'address.city'
    },
    {
      name: 'Zip-code',
      cellClass: 'column-zipcode',
      prop: 'address.zipcode'
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
