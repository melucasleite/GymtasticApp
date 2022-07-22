const API_URL = 'http://localhost:8005/api';
import axios from 'axios';
import {Item} from '../components/ItemView';
import {getToken} from '../state/appSlice';
export const BASE_URI = API_URL;

const client = axios.create({
  baseURL: BASE_URI,
});

client.interceptors.request.use(
  async function (config: any) {
    const token = await getToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

class ApiService {
  request(method: any, path: any, data = undefined, options = {}) {
    return client({
      method,
      url: path,
      data,
      ...options,
    })
      .then((resp: {data: any}) => resp.data)
      .catch(
        (err: {response: {status: number; headers: {refresh_url: any}}}) => {
          if (err.response.status === 403) {
          } else {
            return Promise.reject(err);
          }
        },
      );
  }

  /**
   * Perform GET request
   * @param path API path
   * @param options={} Request options
   * @return API response
   */
  get(path: any, options = {}) {
    return this.request('get', path, undefined, options);
  }

  /**
   * Perform POST request
   * @param path API path
   * @param data={} Request body
   * @param options={} Request options
   * @return API response
   */
  post(path: any, data = undefined, options = {}) {
    return this.request('post', path, data, options);
  }

  /**
   * Perform PUT request
   * @param path API path
   * @param data={} Request body
   * @param options={} Request options
   * @return API response
   */
  put(path: any, data = undefined, options = {}) {
    return this.request('put', path, data, options);
  }

  /**
   * Perform DELETE request
   * @param path API path
   * @param options={} Request options
   * @return API response
   */
  delete(path: any, options = {}) {
    return this.request('delete', path, undefined, options);
  }

  /**
   * Perform PATCH request
   * @param path API path
   * @param data={} Request body
   * @param options={} Request options
   * @return API response
   */
  patch(path: any, data = undefined, options = {}) {
    return this.request('patch', path, data, options);
  }

  getExercises(options: any = undefined) {
    return this.get('/exercises/', options);
  }

  createExercise(options: any) {
    return this.post('/exercises/', options);
  }
  deleteExercise(id: number) {
    return this.delete(`/exercises/${id}/`);
  }
  updateExercise(id: number, payload: Item) {
    return this.patch(`/exercises/${id}/`, payload);
  }
  getCheckins(options: any = undefined) {
    return this.get('/checkins/', options);
  }
  createCheckin(options: any) {
    return this.post('/checkins/', options);
  }
}

export default new ApiService();
