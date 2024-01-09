import apiInstance from "../../utilities/ApiInstance"


const headersWithoutToken = {
    ...apiInstance.defaults.headers
};

const headersWithToken = {
    ...apiInstance.defaults.headers,
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIl9pZCI6IjY1OWJhYWE4MmEwNmE4NmFiNTU4OTMwOSIsImlhdCI6MTcwNDgwMzAyOCwiZXhwIjoxNzA0ODI0NjI4fQ.wElABb2rzWOZLKNAYkZb7xlhZek_KotbeUbhXJw8QAM', // Replace with your actual token
};



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

export const getAllProduct = async () => {
    const headers = {
        'Content-Type': 'application/json',
        // "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQGdtYWlsLmNvbSIsIl9pZCI6IjY1OWJhMzczNzNjYjA2OTlhNzE5ZTEwOSIsImlhdCI6MTcwNDgwODY2M30.SPzXY7LZbOggp90AjzOOokzcCnwqk4QRrJE_B4FXe6I'
    }
    const { data } = await apiInstance.get('getAllProduct', { headers })
    return data
}
