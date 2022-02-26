import {v4 as uuid} from 'uuid'

const initialState = {
    users: [ { id: uuid(), name: "Suzzy", email: "nanasu@email.com", gen: "18"},
    { id: uuid(), name: "Grant", email: "cgas@email.com", gen: "19" },
    { id: uuid(), name: "Sarah", email: "sgyau@email.com", gen: "20" },
    { id: uuid(), name: "Micheal", email: "mcquil@email.com", gen: "20" },
    { id: uuid(), name: "Senanu", email: "svdawu@email.com", gen: "20"}]
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {...state, users: [...state.users, action.payload]}
        case "EDIT_USER":
            return state
        case "DELETE_USER":
            return state
        default:
            return state
    }
}
export default usersReducer