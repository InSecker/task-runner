import { configuration as api } from "../../../config";

export const fetchAPI = async (endpoints) => {
  try {
    const response = await fetch(`${api.base_url}${endpoints}`);
    return response.json();
  } catch (e) {
    console.error(e);
  }
}

export const fetchAddTodo = async (endpoints, UserId, title) => {
  try{
    const response = await fetch(`${api.base_url}${endpoints}`, {
      method: 'POST',
        body: JSON.stringify({
            UserId: {UserId},
            title: {title},
            completed: false,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  }
  catch(e){
    console.error(e);
  }
}
