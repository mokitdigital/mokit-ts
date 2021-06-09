import axios, { AxiosResponse } from 'axios'

const url = 'https://ancient-reef-44571.herokuapp.com'

export default class FormService {
  findForms (): Promise<AxiosResponse> {
    return axios.get(`${url}/api/forms`)
  }

  createForm (form: any): Promise<AxiosResponse> {
    return axios.post(`${url}/api/forms`, form)
  }

  deleteForm (id: string): Promise<AxiosResponse> {
    return axios.delete(`${url}/api/forms?id=${id}`)
  }
}

export const formService = new FormService()
