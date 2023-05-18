import api from "./api";

export const get = async () => {
    try {
        const url = "products?limit=5";
        const rs = await api.get(url);
        return rs.data.products;
    } catch (err) {
        return [];
    }
}