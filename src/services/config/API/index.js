import axios from "axios"
import apiInstance from "../../utilities/ApiInstance"

export const checkServerConnection = async () => {
    const headers = {
        'Content-Type': 'application/json',
    }
    const { data } = await apiInstance.get('/', { headers })
    return data
}

export const signin = async (email, password) => {
    const body = { email, password }
    const headers = {
        'Content-Type': 'application/json',
    }
    const { data } = await apiInstance.post('auth/signin', body, { headers })
    return data
}

export const getAllProduct = async (token) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
    const { data } = await apiInstance.get('getAllProduct', { headers })
    return data
}

export const addToCart = async (token, productId, qty) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
    const body = {
        productId,
        qty
    }
    const { data } = await apiInstance.post('addToCart', body, { headers })
    return data
}

export const deleteToCart = async (token, cartId) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }

    const { data } = await apiInstance.post('deleteFromCart', { cartId }, { headers })
    return data
}

export const incCartByOne = async (token, cartId) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }

    const { data } = await apiInstance.post('cartIncrement', { cartId }, { headers })
    return data
}

export const decCartByOne = async (token, cartId) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }

    const { data } = await apiInstance.post('cartDecrement', { cartId }, { headers })
    return data
}

export const checkExistingEmail = async (body) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    const { data } = await apiInstance.post('auth/checkExistingEmail', body, { headers })
    return data
}

export const uploadProfile = async (formData) => {
    const axiosConfig = {
        method: 'post',
        url: 'http://192.168.100.59:5000/uploadProfile',
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    const { data } = await axios(axiosConfig);
    return data;
}

export const signup = async (body) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    const { data } = await apiInstance.post('auth/signup', body, { headers })
    return data
}
