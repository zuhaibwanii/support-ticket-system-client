import { fetch } from "../utils/fetch";

const createAgent = async (payload) => {
    try {
        const resData = await fetch.post(`/support-agents`, payload);
        return resData
    } catch (err) {
        return err.response
    }
}

const getAgents = async ({ startIndex = 0, limit = 10 }) => {
    let endpoint = `/support-agents?startIndex=${startIndex}&limit=${limit}`;
    try {
        const resData = await fetch.get(endpoint);
        return resData
    } catch (err) {
        return err.response
    }
}




export default { createAgent, getAgents }