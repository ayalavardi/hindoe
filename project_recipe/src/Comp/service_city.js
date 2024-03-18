import axios from 'axios';

// const apiUrl = "http://localhost:5290/todoitems"

export default {
  addCity: async (City,id) => {
    console.log("City",City);
    const s=localStorage.getItem("token")
    const result = await axios.post(`http://localhost:3001/city?id=${id}`, {city:City}, { 
      headers: { 'authorization': localStorage.getItem('token')}})
    return result.data;
  },
  getCity: async () => {
    const result = await axios.get(`http://localhost:3001/city`)  
    return result.data;
  },
  /////////////////////////////
};
