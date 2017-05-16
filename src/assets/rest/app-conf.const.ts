const HOST = 'http://jsonplaceholder.typicode.com/';

export const APP_CONF = {
  'REST': {
    'POSTS': HOST + 'posts',
    'COMMENTS': HOST + 'comments',
    'ALBUMS': HOST + 'albums',
    'PHOTOS': HOST + 'photos',
    'TODOS': HOST + 'todos',
    'USERS': HOST + 'users'
  },
  'ROUTES': {
    'ROOT': {url: '', name: 'Root', inMenu: false},
    'POSTS': {url: 'posts', name: 'Posts', inMenu: true}
  }
}
