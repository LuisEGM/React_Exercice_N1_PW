import httpRequest from './http-config'
import axios from 'axios'

export const login = async (formDataUser) => {
    const result = await axios.post(`${process.env.REACT_APP_ENDPOINT}/login`, formDataUser)
    const token = result.data.access_token;

    const user = await whoami(token);
    return {
        access_token: token,
        token_type: result.data.token_type,
        nombre: user.data.name,
        avatar: user.data.avatar
    }
}

export const whoami = (accessToken) => {
    return httpRequest.get("/me", {
        headers: {
            "Authorization": "Bearer "+accessToken
        }
    });
}

export const signup = (user) => {
    return httpRequest.post("/signup", user);
}
