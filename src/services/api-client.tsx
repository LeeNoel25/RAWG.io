import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
      key: 'f3bb17d00226469f8ebc155a09eb334e',
    },
  });