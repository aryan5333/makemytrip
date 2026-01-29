import axios from 'axios'

const BACKENED_URL = "http://localhost:8080";

export const login = async (email, password) => {
    try {
        const url = `${BACKENED_URL}/user/login?email=${email}&password=${password}`;
        const res = await axios.post(url);
        const data = res.data;
        console.log(data);
        return data;

    } catch (error) {
        throw error;
    }
};
export const signup = async (
    firstname, lastname, phoneNumber, email, password
) => {
    try {
        const res = await axios.post(`${BACKENED_URL}/user/signup`, {
            firstname, lastname, phoneNumber, email, password
        });
        const data = res.data;
        console.log(data);
        return data;

    } catch (error) {
        throw error;
    }
};