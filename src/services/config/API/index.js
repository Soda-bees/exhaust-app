import axios from "axios"
import apiInstance from "../../utilities/ApiInstance"


export const checkServerConnection = async () => {
    const headers = {
        'Content-Type': 'application/json',
    }
    const { data } = await apiInstance.get('/', { headers })
    return data
}

export const signin = async (email, password, deviceToken) => {
    const body = { email, password, deviceToken }
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
        url: 'https://exhaust-backend.netlify.app/.netlify/functions/api/uploadProfile',
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

export const addShippingAddress = async (token, body) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
    const { data } = await apiInstance.post('addShippingAddress', body, { headers })
    return data
}

export const selectShippingAddress = async (token, docId) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
    const { data } = await apiInstance.post('selectShippingAddress', { docId }, { headers })
    return data
}

export const deleteShippingAddress = async (token, addressId) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
    const { data } = await apiInstance.post('deleteShippingAddress', { addressId }, { headers })
    return data
}

export const updateShippingAddress = async (token, body) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
    const { data } = await apiInstance.post('updateShippingAddress', body, { headers })
    return data
}

export const addCard = async (token, body) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
    const { data } = await apiInstance.post('addNewCard', body, { headers })
    return data
}

export const selectCard = async (token, docId) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
    const { data } = await apiInstance.post('selectPaymentCard', { docId }, { headers })
    return data
}

export const deleteCard = async (token, cardId) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
    const { data } = await apiInstance.post('deleteCard', { cardId }, { headers })
    return data
}

export const updateCard = async (token, body) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
    const { data } = await apiInstance.post('updateCard', body, { headers })
    return data
}

export const order = async (token, body) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
    const { data } = await apiInstance.post('order', body, { headers })
    return data
}

export const forgotPassword = async (email) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    const { data } = await apiInstance.post('auth/forgotPasswordOtp', { email }, { headers })
    return data
}

export const resetPassword = async (email, password) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    const { data } = await apiInstance.post('auth/resetPassword', { email, password }, { headers })
    return data
}

export const updateProfile = async (token, body) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }

    const { data } = await apiInstance.post('editProfile', body, { headers })
    return data
}

export const getUserDetails = async (token) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }

    const { data } = await apiInstance.get('userDetails', { headers })
    return data
}

export const cancelOrder = async (token, orderId) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }

    const { data } = await apiInstance.post('cancelOrder', { orderId }, { headers })
    return data
}

export const setNotificationSeen = async (token) => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
    const { data } = await apiInstance.post('setNotificationTrue', {}, { headers })
    return data
}