import axios from 'axios';
import { useSelector } from 'react-redux';

// const apiUrl = "http://localhost:5290/todoitems"



export default {
  // const currentUser= useSelector(x => x.currentUser)

    addCategory: async (Category,id) => {
    const result = await axios.post(`http://localhost:3001/category?id=${id}`,Category,{ 
      headers: { 'authorization': localStorage.getItem('token')}})  
    return result.data;
  },
  getCategory: async () => {
    const result = await axios.get(`http://localhost:3001/category/`,{ 
      headers: { 'authorization': localStorage.getItem('token')}})  
      console.log("fdef");   
    return result.data;
  },
  /////////////////////////////
};
