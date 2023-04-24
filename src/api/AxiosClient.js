import axios from 'axios';

const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

AxiosClient.interceptors.response.use(
  (response) => {
    if (response.headers.authorization) {
      response.data.token = response.headers.authorization;
    }
    const {
      data: { data },
    } = response;
    if (data) {
      return data;
    }

    return response.data;
  },
  (error) => {
    const { response } = error;
    switch (response?.status) {
      case 404:
        console.log('404 error handler!');
        break;
      case 500:
        break;
      case 429:
      case 401:
        break;
      default: {
        const dError = {
          status: response?.status,
          textStatus: response?.textStatus,
          message: response?.data?.message || '',
        };
        console.error('App Error:', dError);
      }
    }

    return Promise.reject(error);
  },
);

export default AxiosClient;
