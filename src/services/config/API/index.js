import apiInstance from "../../utilities/ApiInstance"


const headersWithoutToken = {
    ...apiInstance.defaults.headers
};

const headersWithToken = {
    ...apiInstance.defaults.headers,
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIl9pZCI6IjY1OWJhYWE4MmEwNmE4NmFiNTU4OTMwOSIsImlhdCI6MTcwNDcwMDgwMywiZXhwIjoxNzA0NzIyNDAzfQ.M4ruFsFwWv37olHQw1ZYQUiw5gZIYpWxrWsyWUU1Y4E', // Replace with your actual token
};

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIl9pZCI6IjY1OWJhYWsE4MmEwNmE4NmFiNTU4OTMwOSIsImlhdCI6MTcwNDcwMDgwMywiZXhwIjoxNzA0NzIyNDAzfQ.M4ruFsFwWv37olHQw1ZYQUiw5gZIYpWxrWsyWUU1Y4E'


export const checkServerConnection = async () => {
    const headers = headersWithoutToken
    const { data } = await apiInstance.get('/', { headers })
    return data
}

export const checkServerConnection2 = async () => {
    // const headers = headersWithToken
    
    const  data  = await apiInstance.get('getAllProduct' , {
        headers: {
            Authorization: `Bearer ${token}`,
          },
    })
    return data
}