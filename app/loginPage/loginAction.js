export const loginEmail = (email) => ({
    type: "LOGIN_EMAIL",
    email: email,
})
export const loginPassword = (password) => ({
    type: "LOGIN_PASSWORD",
    password: password
})
export const userAction = (data) => ({
    type: "USER",
    user: data
})