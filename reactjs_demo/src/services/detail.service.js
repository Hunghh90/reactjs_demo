import api from "./api";

export const find = async (id) => {
    try {
        const url = 'products/' + id;
        const rs = await api.get(url);
        return rs.data;
    } catch (e) {
        return {};
    }
}