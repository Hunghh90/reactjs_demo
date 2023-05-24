import api from "./api";

export const get = async () => {
    try {
        const url = "product";
        const rs = await api.get(url);
        return rs.data;
    } catch (err) {
        return [];
    }
}