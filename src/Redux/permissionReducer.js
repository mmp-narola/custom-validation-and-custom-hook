

const initialState = {
    permissions: {
        equipment: { view: true, create: true, delete: true, update: true },
        location: { view: true, create: true, delete: true, update: false },
        shipping: { view: true, create: true, delete: true, update: false }
    }
}

const permissionReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case "AUTH_PERMISSIONS":
            return {
                ...state,
                isLoading: false,
                permissions: payload,
            }


        default:
            return state
    }
}

export default permissionReducer