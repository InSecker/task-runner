import { configuration as api } from "../../../config";

export const fetchAPI = async (endpoints) => {
  try {
    const response = await fetch(`${api.base_url}${endpoints}`);
    return response.json();
  } catch (e) {
    console.error(e);
  }
}
