import api from "./api";

export const getCategory = async () =>{
    try {
        const url = "categories";
        const rs = await api.get(url);
        return rs.data;
    }catch (e) {
        return {};
    }
}
export const getCategoryById = async (id) =>{
        try {
            const url = "categories/get-by-id?id="+id;
            const rs = await api.get(url);
            return rs.data;
        }catch (e) {
            return {};
        }
    }