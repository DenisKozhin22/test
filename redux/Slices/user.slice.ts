import { ILoginRequest } from '@/services/auth.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IUserState {
	user: ILoginRequest
}

const initialState: IUserState = {
	user: {
		id: null,
		first_name: null,
		last_name: null,
		has_required_data: false
	}
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<ILoginRequest>) => {
			state.user = action.payload
		}
	}
})


export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
