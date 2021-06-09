export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(String(localStorage.getItem("token")));

  if (user) {
    return { Authorization: "Bearer " + user };
  } else {
    return {};
  }
}

export function authHeaderMultipart() {
  // return authorization header with jwt token
  let user = JSON.parse(String(localStorage.getItem("token")));

  if (user) {
    return {
      "Authorization": "Bearer " + user,
      "Content-Type": "multipart/form-data",
    };
  } else {
    return {};
  }
}
