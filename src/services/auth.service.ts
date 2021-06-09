import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const url = 'https://ancient-reef-44571.herokuapp.com'

export default class LoginService {
  private headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type'
  })

  login (userName: string, passWord: string): Promise<AxiosResponse> {
    return axios
      .get(`${url}/api/auths/findOnes?userName=${userName}&passWord=${passWord}`, { headers: this.headers })
      .then((user: any) => {
        console.log(user)
        if (user.token) {
          localStorage.setItem('token', JSON.stringify(user.token))
        }

        return user
      })
      .catch((error) => this.handleResponse(error.response))
  }

  handleResponse (response: any) {
    return new Promise((resolve, reject) => {
      if (response === undefined || response == null) {
        const error = 'Impossível comunicar com servidor.'
        reject(error)
      }
      const data = response.data
      if (response.statusText !== 'OK') {
        if (response.status === 401) {
          this.logout()
        }
        let error = ''
        if (data) {
          if (data.message) {
            if (data.message === '' && data.error) error = data.error
            else error = data.message
          } else {
            if (data.error) error = data.error
            else error = data
          }
        } else {
          error = response.statusText
        }
        reject(error)
      }
      resolve(data)
    })
  }

  logout () {
    localStorage.removeItem('token')
    sessionStorage.clear()
  }
}

export const loginService = new LoginService()
