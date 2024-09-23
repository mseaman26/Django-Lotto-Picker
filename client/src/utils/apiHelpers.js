export const getUserById = async (id) => {
    const response = await fetch(`/api/users/${id}`);
    const data = await response.json();
    console.log('response data', data);
    return data
}

export const refreshTokenAPI = async (refreshToken) => {
    console.log('calling refresh token');
    const response = await fetch('/api/token/refresh/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refresh: refreshToken })
    });
    const data = await response.json();
    return data;
}