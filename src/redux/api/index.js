// const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });
// const API = axios.create({ baseURL: "https://rmsapi2.arustu.com/api" });

import axios from "axios";

export const get_FakeStoreData_Api = async () => {
    return await axios.get('https://fakestoreapi.com/products');
}

export const get_LoginRes_Api = async (formData) => {
    return await axios.get('https://fakestoreapi.com/auth/login', formData);
}