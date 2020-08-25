import tokenService from '../utils/tokenService';
const BASE_URL = '/api/posts/';
function index() {
  return fetch(BASE_URL).then(res => res.json());
}
function create(post) {
  return fetch(BASE_URL + 'posts', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(post)
  }).then(res => res.json());
}
export default {
  index,
  create,
};