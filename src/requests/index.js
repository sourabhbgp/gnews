import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v4/top-headlines`;

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

// All request will wait 2 seconds before timeout
// axiosClient.defaults.timeout = 000;

axiosClient.defaults.withCredentials = true;

// Axios Verbs

export const getRequest = (URL) => {
  return axiosClient.get(`/${URL}`).then((response) => response);
};

export const postRequest = (URL, payload) => {
  return axiosClient.post(`${URL}`, payload).then((response) => response);
};

export const patchRequest = (URL, payload) => {
  return axiosClient.patch(`${URL}`, payload).then((response) => response);
};

export const deleteRequest = (URL) => {
  return axiosClient.delete(`${URL}`).then((response) => response);
};
