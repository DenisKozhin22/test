export interface ILoginRequest {
	id: number | null
	first_name: string | null
	last_name: string | null
	has_required_data: boolean
}

export interface ILoginConfirm {
	user_id: number
	confirm_code: string
}

export interface IAuthResponse extends ILoginRequest {
	access_token: string
	refresh_token: string
}
