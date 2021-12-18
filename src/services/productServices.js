import axios from "./http-config"

export const getAll = () => {
    return axios.get("/products/");
}

export const get = (id) => {
    return axios.get(`/products/${id}`);
}

export const create = (product, accessToken) => {
    return axios.post("/products/", product, {
        headers: {
            "Authorization": "Bearer "+accessToken
        }   
    });
}

export const update = (id, product, accessToken) => {
    return axios.put(`/products/${id}`, product, {
        headers: {
            "Authorization": "Bearer "+accessToken
        }   
    });
}

export const remove = (id, accessToken) => {
    return axios.delete(`/products/${id}`, {
        headers: {
            "Authorization": "Bearer "+accessToken
        }   
    });    
}
