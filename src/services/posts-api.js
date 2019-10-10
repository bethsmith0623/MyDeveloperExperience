import tokenService from '../utils/tokenService';

const BASE_URL = '/api/posts';

export function index() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function getOne(id) {
  return fetch(`${BASE_URL}/${id}`)
  .then (res => res.json());
}

export function create(post) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json',
    'Authorization': 'Bearer ' + tokenService.getToken()
  },
    body: JSON.stringify(post)
  }).then(res => {
    console.log(res)
    res.json()
  });
}

export function update(post) {
  return fetch(`${BASE_URL}/${post.id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json',
    'Authorization': 'Bearer ' + tokenService.getToken()
  },
    body: JSON.stringify(post)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
  }).then(res => res.json());
}
