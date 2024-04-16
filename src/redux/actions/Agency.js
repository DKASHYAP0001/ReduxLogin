import { Get_Fake_Store_Product, Login_Res } from '../actionTypes';
import * as api from '../api'

export const get_FakeStoreData_Api = async (dispatch) => {
    try {
        const fakeStoreData = await api.get_FakeStoreData_Api()
        console.log(fakeStoreData);
        dispatch({
            type: Get_Fake_Store_Product,
            payload: fakeStoreData
        })
    } catch (error) {
        console.log(error);
        dispatch({ type: Get_Fake_Store_Product, payload: [] });
    }
}

export const get_LoginRes_Api  = (formData) => async (dispatch) => {
    try {
        const loginRes = await api.get_LoginRes_Api(formData)
        console.log(loginRes);
        dispatch({
            type: Login_Res,
            payload: loginRes
        })
    } catch (error) {
        console.log(error);
        dispatch({ type: Login_Res, payload: [] });
    }
}