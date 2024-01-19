import { fetch } from "../utils/fetch";

const createTicket = async (payload) => {
    try {
        const resData = await fetch.post(`/support-tickets`, payload);
        return resData
    } catch (err) {
        return err.response
    }
}

const getTickets = async ({ startIndex = 0, limit = 10 }) => {
    let endpoint = `/support-tickets?startIndex=${startIndex}&limit=${limit}`;
    try {
        const resData = await fetch.get(endpoint);
        return resData
    } catch (err) {
        return err.response
    }
}




export default { createTicket, getTickets }