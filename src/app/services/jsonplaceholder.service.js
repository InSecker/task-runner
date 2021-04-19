import { configuration as api } from "../../../config";

export const fetchUsers = async () => {
    try {
        const response = await fetch(`${api.base_url}${api.endpoints.users}`);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}


export const fetchTodosByUserId = async (userId) => {
    try {
        const response = await fetch(`${api.base_url}${api.endpoints.users}/${userId}${api.endpoints.todos}`);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}

export const fetchAlbumsByUserId = async (userId) => {
    try {
        const response = await fetch(`${api.base_url}${api.endpoints.users}/${userId}${api.endpoints.albums}`);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}
