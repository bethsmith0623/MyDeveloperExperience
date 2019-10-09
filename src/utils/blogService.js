import tokenService from './tokenService';

export function create(post) {
  return fetch('/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(post)
  }).then(res => res.json());
}