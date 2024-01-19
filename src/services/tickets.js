import { fetch } from "../utils/fetch";

const login = async (payload) => {

    try {
        const resData = await fetch.post(`/user/login`, payload);
        console.log('login resData = ', resData);
        return resData
    } catch (err) {
        console.log('login err = ', err);
        return err.response
    }
}

// const createDeposit = async (payload) => {

//     try {
//         const resData = await authFetch.post(`/deposit`, payload);
//         return resData
//     } catch (err) {
//         return err.response
//     }
// }

// const getDeposits = async ({ getType = 'PENDING', isDashboard = null, startIndex = 0, limit = 10 }) => {
//     let endpoint = `/deposit?getType=${getType}&startIndex=${startIndex}&limit=${limit}`;
//     if (isDashboard) endpoint += `&isDashboard=${isDashboard}`;
//     try {
//         const resData = await authFetch.get(endpoint);
//         return resData
//     } catch (err) {
//         return err.response
//     }
// }




export default { login }