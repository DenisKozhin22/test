import axios from 'axios'
import { parseCookies } from 'nookies'

export const axiosClassic = axios.create({
	baseURL:'http://185.22.61.79:8000/v1/',
	headers: {
		'Content-Type': 'application/json'
	}
})

export const instance = axios.create({
	withCredentials: true,
	baseURL: process.env.BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

export const formDataAxiosInstance = axios.create({
	withCredentials: true,
	baseURL: process.env.BASE_URL,
	headers: {
		'Content-Type': 'multipart/form-data'
	}
})
