import { axiosClassic } from '@/api'
import axios from 'axios'
import { AxiosResponse } from 'axios'
import { IAuthResponse, ILoginConfirm, ILoginRequest } from './auth.types'

export const authService = {
	async loginRequest(phone: string): Promise<AxiosResponse<ILoginRequest>> {
		return axiosClassic.post<ILoginRequest>('login/request', { phone })
	},
	async loginConfirm({
		confirm_code,
		user_id
	}: ILoginConfirm): Promise<AxiosResponse<IAuthResponse>> {
		return axiosClassic.post<IAuthResponse>('login/confirm', { confirm_code, user_id })
	}
}
