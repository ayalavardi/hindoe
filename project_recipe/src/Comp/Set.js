//פונקציות עריכה

export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}

export const Addrecipe = (neww) => {
    return { type: 'ADD_RECIP', payload: neww }
}
export const addUser = (newUser) => {
    return { type: 'ADD_USER', payload: newUser }
}
export const addCatergy = (neww) => {
    return { type: 'ADD_CATEGORY', payload: neww }
}
export const addLelel = (neww) => {
    return { type: 'ADD_LEVEL', payload: neww }
}
export const addIngread = (neww) => {
    return { type: 'ADD_INGREAD', payload: neww }
}
export const addIngridToRecip = (neww) => {
    return { type: 'ADD_INGREAD_TO_RESIP', payload: neww }
}
export const addComment = (neww) => {
    return { type: 'ADD_COMMENT', payload: neww }
}


// export const addrecip = (recip) => {
//     return { type: 'ADD_RECIP', payload: product }
// }

