import axios from 'axios';

const apiUrl = "http://localhost:3001/user"

export default {
  addUser: async (user) => {
    debugger
    const result = await axios.post(`${apiUrl}/signal`, user);
    return result.data;
  },
  getUser: async (user) => {
    debugger
    const result = await axios.post(`${apiUrl}/Login`, user)
    return result.data;
  },
};
