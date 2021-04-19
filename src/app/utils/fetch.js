import { configuration as api } from "../../../config";

export const fetchAPI = async () => {
  try {
    const response = await fetch(`${api.base_url}${api.endpoints.users}`);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}
