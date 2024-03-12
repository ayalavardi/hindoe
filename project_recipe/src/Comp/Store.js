import { produce } from 'immer';
import { createStore } from 'redux';


const initialState = {
    users: [
        { id: 1, name: 'Shulamit', mail: 'shb7101@gmail.com', password: '7101' },
        { id: 2, name: 'Israel', mail: 'il0504123229@gmail.com', password: '1111' },
        { id: 3, name: 'Michal', mail: 'mk0527660151@gmail.com', password: '0151' },
        { id: 4, name: 'ayala', mail: 'ayala.amt@gmail.com', password: '1111' }
    ],
    Manager: { mail: "hindoe.ap@gmail.com" },
    currentUser:
        {name: 'אורח/ת', mail:"",id:"",status:"" },
    recipes: [
        { recipid: 1, name: "sweetmeat", recippic: "../pic/Home", instraction: "cevewgbrgb fef rfefv", codeuser: 2, codeCateg: 1, level: 1, },
        // { recipid: 2, name: "גלידה קייצית", recippic: "../pic/Home", instraction: "cevewgbrgb fef rfefv", codeuser: 1, codeCateg: 2, level: 2, },
        // { recipid: 3, name: "טורטיה", recippic: "../pic/Home", instraction: "cevewgbrgb fef rfefv", codeuser: 2, codeCateg: 4, level: 3, },
        // { recipid: 4, name: "עוף מוקפץ צ'ימיצ'ורי", recippic: "../pic/Home", instraction: "cevewgbrgb fef rfefv", codeuser: 3, codeCateg: 1, level: 1, },
    ],
    Categories: [
        { codeCateg: 1, name: "בשרים" },
        { codeCateg: 2, name: "אחרונות" },
        { codeCateg: 3, name: "עיקרי" },
        { codeCateg: 4, name: "פתיחה" }

    ],
    Levels: [
        // { code: 1, name: "קל" },
        // { code: 2, name: "בינוני" },
        // { code: 3, name: "קשה" }
    ],
    Ingredients: [
        { Ingredid: 1, name: "בשר" },
        { Ingredid: 2, name: "צימוקים" },
        { Ingredid: 3, name: "קמח" }
    ],
    IngredientsToRecipes: [
        { code: 1, recipid: 1, Ingredid: 1, codeuser: 1 },
        { code: 2, recipid: 1, Ingredid: 1, codeuser: 1 }
    ],
    CommentsToRecipes: [
        { code: 1, recipid: 1, codeuser: 1, Comments: "hgfdsafghj" },
        { code: 2, recipid: 2, codeuser: 1, Comments: "hgfdsafghj" }
    ]


}
const reducer = produce((state, action) => {

    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload
            break;
        case 'ADD_USER':
            state.users = [...state.users, action.payload]
            break;
        case 'ADD_RECIP':
            state.recipes = [...state.recipes, action.payload]
            break;
        case 'ADD_CATEGORY':
            state.Categories = [...state.Categories, action.payload]
            break;
        case 'ADD_LEVEL':
            state.Levels = action.payload
            break;
        case 'ADD_INGREAD':
            state.Ingredients = [...state.Ingredients, action.payload]
            break;
        case 'ADD_INGREAD_TO_RESIP':
            state.IngredientsToRecipes = [...state.IngredientsToRecipes, action.payload]
            break;
        case 'ADD_COMMENT':
            state.CommentsToRecipes = [...state.CommentsToRecipes, action.payload]
            break;
        default:
            break;
    }

}, initialState)

const store = createStore(reducer)
window.store = store;
export default store;