import axios from 'axios';
import AuthService from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default { auth: AuthService(api) };
