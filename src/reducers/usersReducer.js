import {v4 as uuid} from 'uuid'

const initialState = {
    users: [ { id: uuid(), name: "Suzzy", email: "nanasu@email.com", gen: "18"},
    { id: uuid(), name: "Grant", email: "cgas@email.com", gen: "19" },
    { id: uuid(), name: "Sarah", email: "sgyau@email.com", gen: "20" },
    { id: uuid(), name: "Micheal", email: "mcquil@email.com", gen: "20" },
    { id: uuid(), name: "Senanu", email: "svdawu@email.com", gen: "20"},
    { id: uuid(), name: "Gifty", email: "gida@email.com", gen: "18"}]
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {...state, users: [...state.users, action.payload]}
        case "EDIT_USER":
            const editedUsers= state.users.map((user) => {
                if (user.id == action.payload.id) return action.payload.userData;
                return user
            })
            return {...state, users: editedUsers}
        case "DELETE_USER":
            const filteredUsers= state.users.filter((user) => {
                if (user.id != action.payload) return user;
            })
            return {...state, users: filteredUsers}
        default:
            return state
    }
}
export default usersReducer