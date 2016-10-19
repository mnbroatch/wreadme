import { post, get, ajax } from 'jquery';
import toastr from 'toastr';

const API = {};


//  API for tales
API.getTopTales = () =>
  get({
    url: '/api/tales/top',
  })
  .then(res => res)
  .catch(toastr.warning);

API.getAllTales = () =>
  get({
    url: '/api/tales',
  })
  .then(res => res)
  .catch(toastr.warning);

API.addOneTale = tale =>
  post({
    url: '/api/tales',
    data: tale,
  })
  .then(res => res)
  .catch(toastr.warning);

API.removeOneTale = taleId =>
  ajax({
    method: 'DELETE',
    url: `/api/tales/${taleId}`,
  })
  .then(res => res)
  .catch(toastr.warning);

API.editOneTale = tale =>
  ajax({
    method: 'PUT',
    url: `/api/tales/${tale._id}`,
    data: tale,
  })
  .then(res => res)
  .catch(toastr.warning);


//  API for chapters
API.getAllChapters = () =>
  get({
    url: '/api/chapters',
  })
  .then(res => res)
  .catch(toastr.warning);

API.addOneChapter = chapter =>
  post({
    url: '/api/chapters',
    data: chapter,
  })
  .then(res => res)
  .catch(toastr.warning);

API.removeOneChapter = chapterId =>
  ajax({
    method: 'DELETE',
    url: `/api/chapters/${chapterId}`,
  })
  .then(res => res)
  .catch(toastr.warning);

API.editOneChapter = chapter =>
  ajax({
    method: 'PUT',
    url: `/api/chapters/${chapter._id}`,
    data: chapter,
  })
  .then(res => res)
  .catch(toastr.warning);

API.editOneTale = tale =>
  ajax({
    method: 'PUT',
    url: `/api/tales/${tale._id}`,
    data: tale,
  })
  .then(res => res)
  .catch(toastr.warning);


//  API for users
API.getAllUsers = () =>
  get({
    url: '/api/users',
  })
  .then(res => res)
  .catch(toastr.warning);

API.addOneUser = user =>
  post({
    url: '/api/users',
    data: user,
  })
  .then(res => res)
  .catch(toastr.warning);

API.removeOneUser = userId =>
  ajax({
    method: 'DELETE',
    url: `/api/users/${userId}`,
  })
  .then(res => res)
  .catch(toastr.warning);

API.editOneUser = user =>
  ajax({
    method: 'PUT',
    url: `/api/users/${user._id}`,
    data: user,
  })
  .then(res => res)
  .catch(toastr.warning);
export default API;
