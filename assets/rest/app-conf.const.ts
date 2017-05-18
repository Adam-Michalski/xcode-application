const HOST = 'http://jsonplaceholder.typicode.com/';

export const APP_CONF = {
  'REST': {
    'POSTS': HOST + 'posts',
    'COMMENTS': HOST + 'comments',
    'USERS': HOST + 'users'
  },
  'ROUTES': {
    'ROOT': {url: '', name: 'Root', inMenu: false},
    'POSTS': {
      url: 'posts', name: 'Posts', inMenu: true, children: {
        'POST': {url: 'post', name: 'Post', inMenu: false}
      }
    },
    'USERS': {url: 'users', name: 'Users', inMenu: true}
  },
  'FIRST_ELEMENT': 0
}

