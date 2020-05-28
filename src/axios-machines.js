import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://my-io-dorm.firebaseio.com/',
});

export default instance;
