import axios from 'axios';


export const gitHubApi = (username) => 
  axios.get(`https://api.github.com/users/${username}`)
       .then(res => res.data)
       .catch(err => console.log('Error:', err));


