import { fetchInfo } from '../utils/fetch'


export const getUsers = () => {
  return fetchInfo.get('/users');
};

export const getUser = (userId) => {
  return fetchInfo.get(`/users/${userId}`);
};

export const getUserPosts = (userId) => {
  return fetchInfo.get(`/posts?userId=${userId}`);
};

export const getPost = (postId) => {
  return fetchInfo.get(`/posts/${postId}`);
};

export const getCommets = (postId) => {
  return fetchInfo.get(`/comments?postId=${postId}`);
};

export const getUserAlbums = (userId) => {
  return fetchInfo.get(`/albums?userId=${userId}`);
};

export const getAlbum = (albumId) => {
  return fetchInfo.get(`/albums/${albumId}/photos`);
};
