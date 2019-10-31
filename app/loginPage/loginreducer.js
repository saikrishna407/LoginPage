let intialState = {
    email: null,
    password: null,
    data: {
        email: "hruday@gmail.com",
        password: "hruday123"
    },
    userData: []
}

const loginreducer = (state = intialState, actions) => {
    switch (actions.type) {
        case "LOGIN_EMAIL":
            return {
                ...state,
                email: actions.email,
            }
        case "LOGIN_PASSWORD":
            return {
                ...state,
                password: actions.password
            }
        case "USER":
            return {
                ...state,
                userData: state.userData.concat(actions.user),
                email: "",
                password: ""
            }
        default:
            return state
    }
}

export default loginreducer