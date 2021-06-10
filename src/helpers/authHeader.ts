export function authHeader (): any {
  // return authorization header with jwt token
  const user = JSON.parse(String(localStorage.getItem('token')))

  if (user) {
    return { Authorization: 'Bearer ' + user }
  } else {
    return undefined
  }
}
