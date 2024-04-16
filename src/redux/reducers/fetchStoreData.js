import { Get_Fake_Store_Product, Login_Res } from "../actionTypes"

const initialState = {
    fakeStoreData: [],
    loginRes: [],
}

const AgencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case Get_Fake_Store_Product:
            return {
                ...state,
                fakeStoreData: action.payload
            }
        case Login_Res:
            return {
                ...state,
                loginRes: action.payload
            }
        default: return state
    }
}

export default AgencyReducer
