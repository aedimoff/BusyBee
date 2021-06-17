import axios from 'axios'

export const addBusiness = (business) => {
    return axios.post(`api/business/`, business)
}