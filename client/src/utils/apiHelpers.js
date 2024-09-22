export const getUserById = async (id) => {
    const response = await fetch(`/api/users/${id}`);
    const data = await response.json();
    console.log('response data', data);
    return await data
}