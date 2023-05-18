import api from "./api";

export const get = async () => {
    try {
        const url = "products?limit=20";
        const rs = await api.get(url);
        return rs.data.products;
    } catch (err) {
        return [];
    }
}

export const post = async (product) => {

}