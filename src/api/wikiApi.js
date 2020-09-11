import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 87Wv0wt4DFqGhKJb3Goj_omabv6JR6l66_tuBSkvOFg',
  },
});
