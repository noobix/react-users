export const AddUserAction = (user) => {
    return {
        type: "ADD_USER",
        payload: user,
    }
}
export const EditUserAction = (id, userData) => {
    return {
        type: "EDIT_USER",
        payload: {id: id, userData: userData}
    }
}
export const DeleteUserAction = (id) => {
    return {
        type: "DELETE_USER",
        payload: id
    }
}