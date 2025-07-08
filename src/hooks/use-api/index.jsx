
export const API_PATH = "";

export const request = async (endpoint, content) => {
  let response = null;
  try {
    response = await fetch(`${API_PATH}${endpoint}`, {
      method: "GET",
      ...content,
    });
    if (response.status !== 200) {
      return response.statusText;
    }
    response = await response.json();
  } catch (error) {
    return error;
  }
  return response;
};

export const requestJSON = async (endpoint, content) => {
  let response = null;
  try {
    response = await fetch(`${API_PATH}${endpoint}`, {
      method: "GET",
      ...content,
    });
    if (response.status !== 200) {
      return response.statusText;
    }
    response = await response.json();
  } catch (error) {
    return error;
  }
  return response;
};

export const requestText = async (endpoint, content) => {
  let response = null;
  try {
    response = await fetch(`${API_PATH}${endpoint}`, {
      method: "GET",
      ...content,
    });
    if (response.status !== 200) {
      return response.statusText;
    }
    response = await response.text();
  } catch (error) {
    return error;
  }
  return response;
};
