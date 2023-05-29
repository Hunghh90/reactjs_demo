import api from "./api";

export const login = async (email,password) => {
    try {
        const url = "auth/login";
        const rs = await api.post(url,{email:email,password:password});
        return rs.data;
    } catch (err) {
        return [];
    }
}