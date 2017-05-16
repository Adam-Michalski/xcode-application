export const TABLE_POSTS = {
  columns: [
    {title: 'Posts', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
    {
      title: 'Position',
      name: 'position',
      sort: false,
      filtering: {filterString: '', placeholder: 'Filter by position'}
    },
    {title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc'},

  ],
page:1,
itemsPerPage:10,
maxSize:5,
numPages: 1,
length:0,

config: {
  paging: true,
  sorting: {columns: this.columns},
  filtering: {filterString: ''},
  className: ['table-striped', 'table-bordered']
}
}
