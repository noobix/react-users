export const AddUserAction = (user) => {
    return {
        type: "ADD_USER",
        payload: user,
    }
}
export const EditUserAction = () => {
    return {
        type: "EDIT_USER"
    }
}
export const DeleteUserAction = () => {
    return {
        type: "DELETE_USER"
    }
}