import axios from 'axios';

const apiUrl = "http://localhost:3001/advertiser"



export default {
  addAdvertiser: async (advertiser) => {
    debugger
    const result = await axios.post(`${apiUrl}/signal`,advertiser) ;
    console.log("r",result);
    return result.data;
  }, 
  getAdvertiser: async (adv) => {
    // debugger
    const result = await axios.post(`${apiUrl}/Login`,adv)   
    const p=result.data
    console.log("p",result);

    return p;
  },
  //////////////////
  // getUser: async (email,password) => {
  //   const result = await axios.get(`https://localhost:7130/api/User/${email}/${password}`)    
  //   return result.data;
  // },

  // addUser: async (user) => {
  //   const result = await axios.post(`https://localhost:7130/api/User`,user) ;
  //   return result.data;
  // }, 
  // getCatergy: async () => {
  //   // alert("1")
  //   const result = await axios.get(`https://localhost:7130/api/Category`) 
  //   // alert("2")
  //   // console.log("htdthdt");
  //   // console.log(result.data);  
  //   return result.data;
  // },
  // addCatergy: async (catergy) => {
  //   const result = await axios.post(`https://localhost:7130/api/Category`,catergy) ;
  //   return result.data;
  // },
  // getLevel: async () => {
  //   const result = await axios.get(`https://localhost:7130/api/Level`)    
  //   return result.data;
  // },
  // addLevel: async (level) => {
  //   const result = await axios.post(`https://localhost:7130/api/Level`,level) ;
  //   if(result!=null)
  //   // alert("rhdthtd")
  //   return result.data;
  // },
  // getIngredient: async () => {
  //   const result = await axios.get(`https://localhost:7130/api/Ingredient`)    
  //   return result.data;
  // },
  // addIngredient: async (ingredient) => {
  //   const result = await axios.post(`https://localhost:7130/api/Ingredient`,ingredient) ;
  //   return result.data;
  // },
  // getRecipe: async () => {
  //   const result = await axios.get(`https://localhost:7130/api/Recipe`)    
  //   return result.data;
  // },
  // addRecipe: async (Recipe) => {
  //   const result = await axios.post(`https://localhost:7130/api/Recipe`,Recipe) ;
  //   return result.data;
  // },
  // getComments: async (recipeId) => {
  //   const result = await axios.get(`https://localhost:7130/api/CommentsToRecipe/${recipeId}`)    
  //   return result.data;
  // },
  // addComments: async (Recipe) => {
  //   const result = await axios.post(`https://localhost:7130/api/CommentsToRecipe`,Recipe) ;
  //   return result.data;
  // },
  // getIngredientsToRecipe: async (recipeId) => {
  //   const result = await axios.get(`https://localhost:7130/api/IngredientsToRecipe/${recipeId}`)    
  //   return result.data;
  // },
  // addIngredientsToRecipe: async (IngredientsToRecipe) => {
  //   const result = await axios.post(`https://localhost:7130/api/IngredientsToRecipe`,IngredientsToRecipe) ;
  //   return result.data;
  // },

  // addTask: async(name)=>{
  //   console.log('addTask', name)
  //   //TODO
  //   return {};
  // },

  // setCompleted: async(id, isComplete)=>{
  //   console.log('setCompleted', {id, isComplete})
  //   //TODO
  //   return {};
  // },

  // deleteTask:async()=>{
  //   console.log('deleteTask')
  // }
};
