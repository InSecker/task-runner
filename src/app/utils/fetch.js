import { configuration as api } from "../../../config";

export const fetchAPI =  async (endpoint) => {
  try {
    const response = await fetch(`${api.base_url}${endpoint}`);
    return response.json();
  } catch (e) {
    console.error(e);
  }
}
